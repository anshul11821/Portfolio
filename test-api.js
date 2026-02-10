const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function testAPI() {
  const apiKey = process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
  
  console.log("---------------------------------------------------");
  console.log("Testing Google Gemini API Connection");
  console.log("---------------------------------------------------");
  
  if (!apiKey) {
    console.error("❌ ERROR: No API Key found in .env.local");
    return;
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    // 1. List available models
    console.log("📋 Fetching available models...");
    // Note: older SDK versions might not support listModels directly in some contexts,
    // but let's try to verify what's there. Usually this requires a separate client or just trial/error.
    // Since listModels isn't always straightforward in the simple SDK wrapper, we'll test specific ones.
    
    // 2. Test gemini-pro (Most stable)
    console.log("🔄 Testing model: 'gemini-pro'...");
    const modelPro = genAI.getGenerativeModel({ model: "gemini-pro" });
    const resultPro = await modelPro.generateContent("Hello, are you online?");
    const responsePro = await resultPro.response;
    console.log("✅ SUCCESS with 'gemini-pro'!");
    console.log("🤖 Response:", responsePro.text());
    
  } catch (error) {
    console.error("❌ FAILED.");
    console.error("Error Details:", error.message);
    
    if (error.message.includes("404")) {
      console.log("\n💡 DIAGNOSIS: The requested model name is invalid for your API key type.");
      console.log("Try using 'gemini-pro' or check if your key has access to 'flash' models.");
    }
  }
  console.log("---------------------------------------------------");
}

testAPI();
