"use client";

import { motion } from "framer-motion";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Welcome Back</h1>

          <p className="mt-3 text-slate-500">
            Sign in to continue with COLLEXA
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();

            alert("Login Successful");
            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "/";
          }}
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-linear-to-r from-violet-600 to-indigo-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?
          <span className="ml-1 font-semibold text-violet-600">Create one</span>
        </p>
      </motion.div>
    </main>
  );
}
