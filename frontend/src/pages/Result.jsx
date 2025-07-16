// src/pages/Result.jsx

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const summary = location.state?.summary;

  useEffect(() => {
    if (!summary) navigate('/');
  }, [summary, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Log Analysis Result
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Summary of the Uploaded Log:
        </h2>
        <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
          {summary}
        </pre>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        Analyze Another Log
      </button>
    </div>
  );
}

export default Result;
