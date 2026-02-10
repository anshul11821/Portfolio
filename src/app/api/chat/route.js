export async function POST(req) {
  try {
    const body = await req.json();
    
    // Use production backend URL or fallback to localhost
    const backendUrl = process.env.BACKEND_URL || "http://localhost:8000";
    
    // Proxy the request to the Python FastAPI backend
    const response = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Backend error");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("PROXY ERROR:", error);
    return new Response(JSON.stringify({ 
      error: "AI Backend Unreachable", 
      details: error.message 
    }), { status: 500 });
  }
}
