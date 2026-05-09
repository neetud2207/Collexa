"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");

    setTimeout(() => {
      setLoggedIn(user === "true");
    }, 0);
  }, []);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="COLLEXA"
            width={55}
            height={55}
            className="object-contain"
          />

          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">COLLEXA</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-violet-600"
          >
            Colleges
          </Link>

          <a
            href="/compare"
            className="font-medium text-slate-700 transition hover:text-violet-600"
          >
            Compare
          </a>

          <a
            href="/predictor"
            className="font-medium text-slate-700 transition hover:text-violet-600"
          >
            Predictor
          </a>

          <a
            href="/saved"
            className="font-medium text-slate-700 transition hover:text-violet-600"
          >
            Saved Colleges
          </a>
        </nav>
        <a
          href="/saved"
          className="font-medium text-slate-700 transition hover:text-violet-600"
        ></a>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {loggedIn ? (
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-r from-violet-500 to-indigo-500 text-lg font-bold text-white shadow-lg">
                N
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  window.location.reload();
                }}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="font-semibold text-slate-700 transition hover:text-violet-600"
              >
                Login
              </Link>

              <Link
                href="/signin"
                className="rounded-2xl bg-linear-to-r from-violet-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
