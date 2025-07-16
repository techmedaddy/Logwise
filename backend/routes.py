from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
import aiofiles
from pathlib import Path
import os

from utils import clean_log
from ai_engine import analyze_log_with_granite


router = APIRouter()

# Folder to store uploaded files temporarily
UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/analyze-log")
async def analyze_log(file: UploadFile = File(...)):
    MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

    try:
        if file.size > MAX_FILE_SIZE:
            raise HTTPException(
                status_code=413, detail="File size exceeds maximum limit (10 MB)"
            )

        # Save the uploaded file to disk
        file_path = Path(UPLOAD_DIR) / file.filename
        # Sanitize filename
        file_path = file_path.resolve()  # Resolve to absolute path


        async with aiofiles.open(file_path, "wb") as f:
            await f.write(content)

        # Read the file content
        async with aiofiles.open(file_path, "r") as f:
            log_text = await f.read()

        # Clean the log text
        cleaned_log = clean_log(log_text)

        # Analyze log using IBM Granite via Ollama
        summary = analyze_log_with_granite(cleaned_log)

        # Return AI-generated summary
        response = JSONResponse(
            content={"summary": summary},
            status_code=200
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        if os.path.exists(file_path):
            os.remove(file_path)
