import React from 'react';

export default function BasicInfo() {
  return (
    <section className="text-center space-y-2">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-lime-300">Morgan Carmichael</h1>
      <p className="text-lg text-gray-400 italic">a.k.a. dashinwrites</p>
      <div className="text-sm sm:text-base text-gray-400 space-y-1">
        <p><span className="text-white font-medium">Class:</span> Front-End Developer</p>
        <p><span className="text-white font-medium">Level:</span> 4 — React Enthusiast</p>
        <p><span className="text-white font-medium">Location:</span> Toronto, Canada</p>
        <p><span className="text-white font-medium">Alignment:</span> Chaotic Good</p>
      </div>
    </section>
  );
}
