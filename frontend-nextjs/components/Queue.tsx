"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function ApiQueueDemo() {
  const [error, setError] = useState<string>("");
  const [queue, setQueue] = useState<any>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("idle");
  const [responses, setResponses] = useState<any>([]);

  const processQueue = async () => {
    if (isProcessing || queue.length === 0) return;

    setIsProcessing(true);
    setCurrentStatus("processing...");

    const job = queue[0];

    try {
      const response = await axios.post("http://localhost:4000/api/v1/echo", {
        message: "hi",
      });

      setResponses((prev: any) => [
        ...prev,
        { id: job.id, data: response.data },
      ]);
      setCurrentStatus("success");
    } catch (err: any) {
      if (err.response?.status === 429) {
        setError(`Job ${job.id}: Too many requests! Please wait a moment.`);
        setCurrentStatus("rate-limited");
      } else {
        alert("Something went wrong: " + err.message);
        setCurrentStatus("failed");
        setError(`Job ${job.id}: ${err.message}`);
      }
    } finally {
      setQueue((prev: any) => prev.slice(1));
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (queue.length > 0) {
      processQueue();
    } else {
      setCurrentStatus("idle");
    }
  }, [queue]);

  const addJob = () => {
    setQueue((prev: any) => [...prev, { id: Date.now() }]);
  };

  return (
    <div className="p-16">
      <h1 className="text-xl text-black font-semibold">
        Frontend API Request Queue
      </h1>

      <button
        onClick={addJob}
        className="md:px-4 py-2 my-6 px-3 rounded-lg text-white cursor-pointer text-sm font-medium"
        style={{ backgroundColor: "#335CFF" }}
      >
        Add API Request
      </button>

      <div className="font-semibold text-base">
        Queued requests: {queue.length}
      </div>
      <div className="font-semibold text-base">
        Current Status: {currentStatus}
      </div>

      <h3 className="font-semibold text-base">Responses:</h3>
      <ul>
        {responses.map((r: any) => (
          <li className="text-sm font-semibold text-gray-700 mt-2" key={r.id}>
            Job {r.id}: {JSON.stringify(r.data)}
          </li>
        ))}
      </ul>

      {error && <p className="text-red-500 text-sm mt-5">{error}</p>}
    </div>
  );
}
