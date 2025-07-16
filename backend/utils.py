# utils.py

import re

def clean_log(log_text: str, max_chars: int = 2000) -> str:
    """
    Cleans and trims log text:
    - Removes blank lines
    - Removes debug lines (optional)
    - Strips long logs to `max_chars`
    """

    # Remove blank lines
    lines = [line for line in log_text.split("\n") if line.strip()]

    # Optional: Remove debug logs
    lines = [line for line in lines if not re.search(r"\bDEBUG\b", line, re.IGNORECASE)]

    # Join and truncate
    cleaned = "\n".join(lines).strip()

    return cleaned[:max_chars]  # Truncate to avoid token overload
