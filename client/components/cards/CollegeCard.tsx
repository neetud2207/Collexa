"use client";

import Image from "next/image";
import { MapPin, Star } from "lucide-react";

interface CollegeCardProps {
  id: number;
  name: string;
  location: string;
  course: string;
  fees: number;
  rating: number;
  image: string;
  onCompare?: () => void;
}

export default function CollegeCard({
  id,
  name,
  location,
  course,
  fees,
  rating,
  image,
  onCompare,
}: CollegeCardProps) {
  return (
    <div className="overflow-hidden rounded-4xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />

        {/* RATING */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-slate-800">{rating}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-3xl font-bold text-slate-900">{name}</h3>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-slate-500">Course</p>
            <p className="font-semibold text-slate-900">{course}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-slate-500">Annual Fees</p>
            <p className="font-semibold text-slate-900">₹{fees} Lakhs</p>
          </div>
        </div>

        {/* BUTTON */}
        {/* BUTTONS */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onCompare}
            className="w-1/2 rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Compare
          </button>

          <button
            onClick={() => {
              const stored = localStorage.getItem("saved-colleges");

              const saved = stored ? JSON.parse(stored) : [];

              const exists = saved.find(
                (item: { id: number }) => item.id === id,
              );

              if (exists) {
                alert("College already saved");
                return;
              }

              saved.push({
                id,
                name,
                location,
                course,
                fees,
                rating,
                image,
              });

              localStorage.setItem("saved-colleges", JSON.stringify(saved));

              alert("College saved successfully");
            }}
            className="w-1/2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
