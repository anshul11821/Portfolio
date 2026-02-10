export async function POST(req) {
  try {
    const body = await req.json();
    
    // Use production backend URL or fallback to localhost
    const envBackendUrl = process.env.BACKEND_URL;
    const backendUrl = envBackendUrl || "http://localhost:8000";
    
    if (!envBackendUrl) {
      console.warn("⚠️ BACKEND_URL environment variable is MISSING in Vercel settings. Falling back to localhost.");
    }
    
    console.log("Attempting to connect to backend at:", backendUrl);
    
    try {
      // Proxy the request to the Python FastAPI backend
      const response = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        let errorDetail = "Backend error";
        try {
          const errorData = await response.json();
          errorDetail = errorData.detail || errorData.error || errorDetail;
        } catch (e) {
          errorDetail = await response.text() || errorDetail;
        }
        throw new Error(errorDetail);
      }

      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (fetchError) {
      console.error("FETCH ERROR:", fetchError);
      throw new Error(`Failed to reach AI Backend at ${backendUrl}. Check if your Python server is running and BACKEND_URL is set in Vercel. Error: ${fetchError.message}`);
    }
  } catch (error) {
    console.error("PROXY ERROR:", error);
    return new Response(JSON.stringify({ 
      error: "AI Backend Unreachable", 
      details: `${error.message} (Tried URL: ${backendUrl})`,
      check: "If the URL above is 'localhost:8000', your Vercel Environment Variable is NOT set correctly. If it's the Render URL, Render might be blocking Vercel's IP or is still waking up."
    }), { status: 500 });
  }
}
