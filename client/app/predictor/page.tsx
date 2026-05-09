"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { colleges } from "@/constants/colleges";

export default function PredictorPage() {
  const [exam, setExam] = useState("");
  const [rank, setRank] = useState("");
  const [results, setResults] = useState<typeof colleges>([]);

  const handlePredict = () => {
    const userRank = Number(rank);

    let predicted: typeof colleges = [];

    // RULE-BASED LOGIC
    if (exam === "JEE") {
      if (userRank <= 1000) {
        predicted = colleges.slice(0, 2);
      } else if (userRank <= 5000) {
        predicted = colleges.slice(1, 4);
      } else if (userRank <= 20000) {
        predicted = colleges.slice(2, 6);
      } else {
        predicted = colleges.slice(4, 8);
      }
    }

    if (exam === "NEET") {
      if (userRank <= 500) {
        predicted = colleges.slice(0, 2);
      } else if (userRank <= 5000) {
        predicted = colleges.slice(2, 5);
      } else {
        predicted = colleges.slice(4, 8);
      }
    }

    setResults(predicted);
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
              College Predictor
            </p>

            <h1 className="mt-4 text-center text-5xl font-bold text-slate-900">
              Predict Your College
            </h1>

            <p className="mt-4 text-center text-lg text-slate-500">
              Enter your exam and rank to discover possible colleges.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Exam */}
              <select
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 text-lg outline-none focus:border-violet-500"
              >
                <option value="">Select Exam</option>
                <option value="JEE">JEE</option>
                <option value="NEET">NEET</option>
              </select>

              {/* Rank */}
              <input
                type="number"
                placeholder="Enter Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="rounded-2xl border border-slate-200 px-5 py-4 text-lg outline-none focus:border-violet-500"
              />

              {/* Button */}
              <button
                onClick={handlePredict}
                className="rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Predict Colleges
              </button>
            </div>
          </div>

          {/* RESULTS */}
          {results.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-8 text-3xl font-bold text-slate-900">
                Predicted Colleges
              </h2>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {results.map((college) => (
                  <div
                    key={college.id}
                    className="overflow-hidden rounded-3xl bg-white shadow-xl"
                  >
                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {college.name}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        📍 {college.location}
                      </p>

                      <div className="mt-5 space-y-2">
                        <p>
                          <span className="font-semibold">Course:</span>{" "}
                          {college.course}
                        </p>

                        <p>
                          <span className="font-semibold">Fees:</span> ₹
                          {college.fees} Lakhs
                        </p>

                        <p>
                          <span className="font-semibold">Rating:</span> ⭐{" "}
                          {college.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
