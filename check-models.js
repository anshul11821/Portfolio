const https = require('https');
const fs = require('fs');
const path = require('path');

// Simple manual dotenv parser
function loadEnv() {
  try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          const value = match[2].trim().replace(/^["']|["']$/g, '');
          process.env[key] = value;
        }
      });
    }
  } catch (e) {
    fs.writeFileSync('models_log.txt', 'Error loading .env.local: ' + e.message);
  }
}

loadEnv();

const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
const logFile = 'models_log.txt';

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logFile, msg + '\n');
}

// Reset log
fs.writeFileSync(logFile, '');

if (!apiKey) {
  log("❌ No API key found in .env.local");
  process.exit(1);
}

log(`Checking models for key ending in ...${apiKey.slice(-4)}`);

const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.error) {
        log("❌ API Returned Error: " + JSON.stringify(json.error, null, 2));
      } else if (json.models) {
        log("✅ SUCCESS. Available Models:");
        const chatModels = json.models.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"));
        chatModels.forEach(m => log(`- ${m.name.replace('models/', '')}`));
        
        if (chatModels.length === 0) {
            log("⚠️ No 'generateContent' models found. Raw types available:");
            json.models.forEach(m => log(`- ${m.name} [${m.supportedGenerationMethods}]`));
        }
      } else {
        log("⚠️ Unexpected response format: " + data.substring(0, 200));
      }
    } catch (e) {
      log("❌ Failed to parse JSON: " + e.message);
      log("Raw body: " + data.substring(0, 200));
    }
  });
}).on('error', (e) => {
  log("❌ Network Error: " + e.message);
});
