import React, { useState } from "react";

const AIAnalyzer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const sampleData = {
        votes_from_wallet: 5,
        vote_burst_score: 0.12,
        recent_tx_count: 2,
        phase: "Voting",
        event: "VoteCast",
        category: "DAO Governance",
        voterAddress: "0x123",
        device_ip_hash: "abc123",
        candidateId: 1,
        avg_gas_fee: 0.01,
        chairperson: "0x456",
        candidate_vote_count: 10,
        wallet_creation_age: 30,
        time_since_start: 5,
        electionId: "e1",
        title: "Election 1",
      };

      const response = await fetch("http://127.0.0.1:5000/analyze_vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sampleData),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong" });
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <button
        onClick={handleAnalyze}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {loading ? "Analyzing..." : "Run AI Analysis"}
      </button>

      {result && (
        <div className="mt-6 bg-gray-900 text-white rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-400">
            Hybrid Anomaly Detection Result
          </h2>

          {result.error ? (
            <p className="text-red-400">{result.error}</p>
          ) : (
            <div>
              <p>
                <span className="text-gray-400">Anomaly Detected:</span>{" "}
                <span
                  className={
                    result.anomaly_detected ? "text-red-400" : "text-green-400"
                  }
                >
                  {String(result.anomaly_detected)}
                </span>
              </p>

              <p>
                <span className="text-gray-400">Hybrid Score:</span>{" "}
                <span className="font-semibold">
                  {result.hybrid_score?.toFixed(3)}
                </span>
              </p>

              {result.lime_explanation && (
                <div className="mt-4">
                  <p className="text-gray-400 mb-2">
                    Top Contributing Features (from LIME):
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    {result.lime_explanation.map((feat, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{feat.feature}</span>:{" "}
                        {(feat.contribution * 100).toFixed(2)}%
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAnalyzer;
