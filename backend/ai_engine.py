# ai_engine.py
import subprocess
import json
import logging

def analyze_log_with_granite(log_text: str, model_name: str = "mistral") -> str:
    prompt = f"""
Analyze the following server logs and provide a summary of any errors, issues, or warnings:
    
    {log_text[:2000]}  # Truncate to avoid token overload
    """

    try:
        result = subprocess.run(
            ["ollama", "run", "mistral"],
            # model name parameter
            input=prompt.encode("utf-8"),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=300
        )

        logging.info(f"Ollama process finished with return code: {result.returncode}")

        if result.returncode != 0:
            raise RuntimeError(result.stderr.decode())

        output = result.stdout.decode().strip()
        return output

    except Exception as e:
        logging.error(f"Failed to analyze log: {str(e)}")
        return f"Failed to analyze log: {str(e)}"
