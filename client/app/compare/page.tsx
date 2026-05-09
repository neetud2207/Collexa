"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CompareSection from "@/components/compare/CompareSection";

interface College {
  id: number;
  name: string;
  location: string;
  course: string;
  fees: number;
  rating: number;
  image: string;
}

export default function ComparePage() {
  const [selected, setSelected] = useState<College[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("compare-colleges");

    if (stored) {
      setSelected(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="pt-32 px-6">
        {selected.length > 0 ? (
          <CompareSection
            selected={selected}
            onRemove={(id) => {
              const updated = selected.filter((college) => college.id !== id);

              setSelected(updated);

              localStorage.setItem("compare-colleges", JSON.stringify(updated));
            }}
          />
        ) : (
          <div className="flex h-[60vh] items-center justify-center">
            <h1 className="text-3xl font-bold text-slate-500">
              No colleges selected for comparison
            </h1>
          </div>
        )}
      </div>
    </main>
  );
}
