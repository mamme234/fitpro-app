import React from "react";
import Navbar from "../components/Navbar";
import ClassCard from "../components/ClassCard";

const SAMPLE_CLASSES = [
  { id: 1, title: "Yoga — Sunrise Flow", trainer: "Alice", start: "2026-07-10T06:30:00Z", capacity: 14 },
  { id: 2, title: "HIIT — Power Hour", trainer: "Bob", start: "2026-07-10T18:00:00Z", capacity: 20 },
  { id: 3, title: "Pilates — Core Strength", trainer: "Carmen", start: "2026-07-11T09:00:00Z", capacity: 12 },
  { id: 4, title: "Spin — Cardio Blast", trainer: "Diego", start: "2026-07-11T17:30:00Z", capacity: 18 }
];

export default function App() {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-primary-50 to-white">
        <div className="container py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">Get stronger. Feel better. Join classes you love.</h1>
              <p className="mt-4 text-lg text-gray-600">A modern, simple studio management and booking experience — built for trainers and members.</p>

              <div className="mt-8 flex gap-3">
                <a href="/classes" className="inline-flex items-center gap-2 px-5 py-3 bg-primary-500 text-white rounded-lg shadow hover:bg-primary-700">
                  View classes
                </a>
                <a href="/login" className="inline-flex items-center gap-2 px-5 py-3 border rounded-lg hover:bg-gray-50">
                  Sign in
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <strong>Pro tip:</strong> Use the demo account at login (admin@example.com / password).
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SAMPLE_CLASSES.map((c) => (
                  <div key={c.id}>
                    <ClassCard {...c} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming classes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_CLASSES.map((c) => <ClassCard key={c.id} {...c} />)}
          </div>
        </section>
      </main>

      <footer className="border-t mt-12">
        <div className="container py-8 text-sm text-gray-500 flex justify-between items-center">
          <div>© {new Date().getFullYear()} Gym App Pro</div>
          <div>Made with ❤️ for trainers & members</div>
        </div>
      </footer>
    </>
  );
            }
