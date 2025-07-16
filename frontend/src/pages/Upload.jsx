// src/pages/Upload.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a log file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post("http://localhost:8000/analyze-log", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/result", { state: { summary: response.data.summary } });
    } catch (err) {
      console.error("Error uploading file:", err);
      setError("Upload failed. Please check if the backend is running.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <div className="w-full max-w-md bg-[#1e293b] rounded-2xl p-8 shadow-2xl border border-blue-900">
        <div className="flex flex-col items-center space-y-4">
          {/* Custom Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md text-white text-xl font-bold">
              🔍
            </div>
            <h1 className="text-3xl font-extrabold text-cyan-400 tracking-wide">
              Log<span className="text-blue-500">Wise</span>
            </h1>
          </div>

          <p className="text-center text-sm text-gray-300">
            Intelligent Log Analysis Powered by AI
          </p>

          {/* Features */}
          <div className="flex gap-2 text-xs text-cyan-300 flex-wrap justify-center mt-1">
            <span className="bg-[#0f172a] px-3 py-1 rounded-full border border-cyan-500">⚡ Lightning Fast</span>
            <span className="bg-[#0f172a] px-3 py-1 rounded-full border border-cyan-500">🤖 AI Powered</span>
            <span className="bg-[#0f172a] px-3 py-1 rounded-full border border-cyan-500">📊 Smart Insights</span>
          </div>

          {/* File Upload */}
          <label className="mt-6 w-full cursor-pointer border-2 border-dashed border-cyan-500 rounded-xl p-6 flex flex-col items-center hover:bg-cyan-950 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 004-4m-4-4l-4-4m0 0l-4 4m4-4v12" />
            </svg>
            <span className="text-sm text-white font-semibold">Drop your log files here</span>
            <span className="text-xs text-gray-400 mt-1">or click to browse</span>
            <input type="file" accept=".log,.txt,.csv,.json" onChange={handleFileChange} hidden />
          </label>

          {/* File type badges */}
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs">
            {[".log", ".txt", ".csv", ".json"].map((ext) => (
              <span key={ext} className="bg-cyan-800 text-cyan-200 px-2 py-0.5 rounded-full">{ext}</span>
            ))}
          </div>

          {/* Error message */}
          {error && <p className="text-red-400 text-xs mt-2">{error}</p>}

          {/* Upload Button - centered and compact */}
          <div className="mt-4 flex justify-center">
            <button
              disabled={uploading}
              onClick={handleUpload}
              className={`px-6 py-2 rounded-full font-semibold ${
                uploading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              } shadow-md text-white`}
            >
              {uploading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                  Analyzing...
                </div>
              ) : (
                "Analyze Logs"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
