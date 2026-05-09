"use client";

interface College {
  id: number;
  name: string;
  location: string;
  course: string;
  fees: number;
  rating: number;
  image: string;
}

interface CompareSectionProps {
  selected: College[];
  onRemove: (id: number) => void;
}

export default function CompareSection({
  selected,
  onRemove,
}: CompareSectionProps) {
  if (selected.length === 0) return null;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            COMPARE COLLEGES
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-900">
            College Comparison Dashboard
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Compare colleges side-by-side with detailed insights
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-4x1 bg-white shadow-2xl">
          <table className="w-full min-w-225 border-collapse">
            <thead>
              <tr className="bg-linear-to-r from-violet-500 to-indigo-500 text-white">
                <th className="px-6 py-5 text-left text-lg font-semibold">
                  Features
                </th>

                {selected.map((college) => (
                  <th key={college.id} className="px-6 py-5 text-center">
                    <div className="flex flex-col items-center">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="mb-3 h-24 w-24 rounded-2xl object-cover"
                      />

                      <h3 className="text-xl font-bold">{college.name}</h3>

                      <button
                        onClick={() => onRemove(college.id)}
                        className="mt-3 rounded-xl bg-white/20 px-4 py-2 text-sm transition hover:bg-white/30"
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* LOCATION */}
              <tr className="border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Location
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center text-slate-600"
                  >
                    {college.location}
                  </td>
                ))}
              </tr>

              {/* COURSE */}
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Course
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-medium"
                  >
                    {college.course}
                  </td>
                ))}
              </tr>

              {/* FEES */}
              <tr className="border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Annual Fees
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-bold text-slate-900"
                  >
                    ₹{college.fees} Lakhs
                  </td>
                ))}
              </tr>

              {/* RATING */}
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Rating
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-bold text-yellow-500"
                  >
                    ⭐ {college.rating}
                  </td>
                ))}
              </tr>

              {/* PLACEMENT */}
              <tr className="border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Placement Rate
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-semibold text-green-600"
                  >
                    {Math.floor(college.rating * 18)}%
                  </td>
                ))}
              </tr>

              {/* AVG PACKAGE */}
              <tr className="bg-slate-50 border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Average Package
                </td>

                {selected.map((college) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-semibold text-cyan-600"
                  >
                    ₹{Math.floor(college.rating * 3)} LPA
                  </td>
                ))}
              </tr>

              {/* HOSTEL */}
              <tr className="border-b">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  Hostel Facility
                </td>

                {selected.map((college) => (
                  <td key={college.id} className="px-6 py-5 text-center">
                    ✅ Available
                  </td>
                ))}
              </tr>

              {/* NIRF */}
              <tr className="bg-slate-50">
                <td className="px-6 py-5 font-semibold text-slate-700">
                  NIRF Rank
                </td>

                {selected.map((college, index) => (
                  <td
                    key={college.id}
                    className="px-6 py-5 text-center font-bold text-violet-600"
                  >
                    #{index + 1}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
