// src/components/homepage/flavorText.jsx
import React from 'react';

export default function FlavorText() {
  return (
    <section className="mt-6 text-center max-w-2xl mx-auto">
      <blockquote className="italic text-gray-300 relative px-4 sm:px-6 py-6 border-l-4 border-lime-400">
        <span className="block text-lg leading-relaxed">
          “A curious blend of pixel-polish and problem-solver, Morgan builds with elegance, empathy, and just enough chaos to keep things interesting.”
        </span>
      </blockquote>
    </section>
  );
}
