"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CollegeCard from "@/components/cards/CollegeCard";

interface College {
  id: number;
  name: string;
  location: string;
  course: string;
  fees: number;
  rating: number;
  image: string;
}

export default function SavedPage() {
  const [savedColleges, setSavedColleges] = useState<College[]>([]);

  useEffect(() => {
    const loadColleges = () => {
      const stored = localStorage.getItem("saved-colleges");

      if (stored) {
        setSavedColleges(JSON.parse(stored));
      }
    };

    loadColleges();
  }, []);

  const removeCollege = (id: number) => {
    const updated = savedColleges.filter((college) => college.id !== id);

    setSavedColleges(updated);

    localStorage.setItem("saved-colleges", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="px-6 pt-32 pb-16">
        <h1 className="mb-10 text-5xl font-bold text-slate-900">
          Saved Colleges
        </h1>

        {savedColleges.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-md">
            <p className="text-xl text-slate-500">No saved colleges yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {savedColleges.map((college) => (
              <div key={college.id} className="relative">
                <CollegeCard {...college} />

                <button
                  onClick={() => removeCollege(college.id)}
                  className="absolute right-4 top-4 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
