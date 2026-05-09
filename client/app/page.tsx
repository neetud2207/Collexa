"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CollegeCard from "@/components/cards/CollegeCard";

import { motion } from "framer-motion";
interface College {
  id: number;
  name: string;
  location: string;
  course: string;
  fees: number;
  rating: number;
  image: string;
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [colleges, setColleges] = useState<College[]>([]);
  useEffect(() => {
    async function fetchColleges() {
      try {
        const res = await fetch("/api/colleges");

        const data = await res.json();

        setColleges(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchColleges();
  }, []);
  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch = college.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesLocation = location === "" || college.location === location;

      const matchesCourse = course === "" || college.course === course;

      return matchesSearch && matchesLocation && matchesCourse;
    });
  }, [colleges, search, location, course]);
  const handleCompare = (college: College) => {
    const stored = localStorage.getItem("compare-colleges");

    const compareList = stored ? JSON.parse(stored) : [];

    const exists = compareList.find((item: College) => item.id === college.id);

    if (exists) return;

    compareList.push(college);

    localStorage.setItem("compare-colleges", JSON.stringify(compareList));

    if (compareList.length > 6) {
      alert("You can compare a maximum of 6 colleges");
      return;
    }

    if (compareList.length >= 2) {
      setTimeout(() => {
        window.location.href = "/compare";
      }, 0);
    }
  };
  return (
    <main className="relative overflow-x-hidden bg-slate-50">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass-card mx-auto max-w-6xl rounded-[40px] px-10 py-16 shadow-2xl"
        >
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            COLLEGE DISCOVERY PLATFORM
          </p>

          <h1 className="text-center text-7xl font-bold leading-tight text-slate-900">
            Discover Your Dream <span className="gradient-text">College</span>
            <br />
            With Confidence
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xl text-slate-600">
            Compare colleges, predict admissions, explore reviews, and make
            smarter education decisions with COLLEXA.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <button className="primary-button">Explore Colleges</button>

            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700">
              Compare Colleges
            </button>
          </div>
        </motion.div>
      </section>

      {/* COLLEGES */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            TOP COLLEGES
          </p>

          <h2 className="mt-3 text-center text-6xl font-bold text-slate-900">
            Explore Popular Colleges
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xl text-slate-600">
            Discover India’s best colleges with placement data, fee structures,
            reviews, and admission insights.
          </p>

          {/* SEARCH + FILTERS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Search colleges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm outline-none"
            />

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <option value="">Location</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
              <option value="Vellore">Vellore</option>
              <option value="Rajasthan">Rajasthan</option>
            </select>

            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
            >
              <option value="">Course</option>
              <option value="Engineering">Engineering</option>
              <option value="Arts">Arts</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                window.location.href = "/compare";
              }}
              className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Open Compare
            </button>
          </div>

          {/* CARDS */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                {...college}
                onCompare={() => handleCompare(college)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
