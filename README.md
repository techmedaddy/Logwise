

# 🔍 LogWise - AI-Powered Log Analyzer

**LogWise** is a fast, lightweight and intelligent log analyzer built to help developers, DevOps engineers, and SREs gain **quick insights** from long and messy server log files. Powered by **LLMs** like Mistral (via Ollama), it summarizes, identifies errors, and provides useful diagnostics — instantly.

---

## 💡 Why LogWise?

### 🚨 The Problem:
Developers often struggle with:
- Endless `.log` files filled with stack traces, warnings, timestamps, and cryptic messages
- Manually scanning logs to debug production issues
- Missing key events hidden deep in noisy outputs

> Logs are essential — but often **overwhelming**.

---



### ✅ The Solution:
LogWise turns raw logs into **natural language summaries**, identifying:
- 🔧 Root causes of failures
- ⚠️ Warnings and timeouts
- 🧠 Insights and optimization tips

---



## ✨ Key Features

- 🔍 **AI Summarization** of complex logs using local LLMs
- ⚡ Blazingly fast file upload & analysis
- 🧠 Context-aware analysis (not just pattern matching)
- 🌙 Fully offline with **Ollama**
- 🎨 Beautiful UI built with **Tailwind CSS**
- 🔐 No data is sent to cloud APIs

---

## 🧰 Tech Stack & Tools

| Layer        | Tech Used                          | Description                                |
|--------------|------------------------------------|--------------------------------------------|
| 🧠 AI Engine | [Ollama](https://ollama.com) + [Mistral](https://mistral.ai/) | Local LLM used for intelligent log parsing |
| 🚀 Backend   | FastAPI (Python)                   | REST API to handle file upload and analysis |
| 🎨 Frontend  | React + Vite + Tailwind CSS        | Modern UI, responsive and clean            |
| 🐳 DevOps    | Docker + Docker Compose            | Containerized app environment              |
| 🧪 Tools     | Axios, FormData                    | Frontend-backend communication             |

<div align="center">
  <img src="https://img.shields.io/badge/dockerized-✓-blue" />
  <img src="https://img.shields.io/badge/C%2B%2B-17-blue.svg" />
  <img src="https://img.shields.io/badge/json-log-orange.svg" />
  <img src="https://img.shields.io/badge/nlohmann/json-%23brightgreen.svg" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
</div>

<br/>








## 📁 Folder Structure

```bash
logwise/
├── backend/                # FastAPI backend
│   ├── main.py
│   ├── routes.py
│   ├── utils.py
│   └── requirements.txt
│
├── frontend/               # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── main.jsx
│   └── index.html
│
├── docker-compose.yml      # Fullstack dev setup
├── .gitignore              # Clean repo
└── README.md               # This file
```


---



## 🧪 Sample Use Case

Upload this log file:

```yaml
2024-07-01 12:02:15 WARNING Disk usage exceeds 85%
2024-07-01 12:02:18 ERROR Timeout occurred in UserService at line 45
2024-07-01 12:02:20 INFO Reconnecting to database...
```

→ You'll get an AI summary like:

```css
1. Disk space is critically high.
2. A timeout error occurred in UserService.
3. A recovery attempt to reconnect was initiated.
```



## 🐳 Run Locally with Docker

```bash
# Start both frontend and backend
docker-compose up --build
```


Then open: [http://localhost:5173](http://localhost:5173)

> ✅ Make sure you have [Ollama](https://ollama.com) installed locally and model pulled:

```bash
ollama pull mistral
```


