# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router

# Create FastAPI app instance
app = FastAPI(
    title="LogWise AI Log Analyzer",
    description="Analyze logs using IBM Granite via Ollama",
    version="1.0.0"
)

# Enable CORS to allow requests from frontend (React on localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # For production, use: ["your_domain"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(router)
