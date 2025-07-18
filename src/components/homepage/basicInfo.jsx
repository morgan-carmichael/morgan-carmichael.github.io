import React from 'react';

export default function BasicInfo() {
  return (
    <section className="text-center space-y-2">
      <h1 className="text-4xl font-bold">Morgan Carmichael</h1>
      <p className="text-lg text-gray-500">aka <span className="italic">dashinwrites</span></p>
      <p className="text-md text-gray-400">Class: <span className="font-medium text-white">Front-End Developer</span></p>
      <p className="text-md text-gray-400">Level: <span className="text-white">4 — React Enthusiast</span></p>
      <p className="text-md text-gray-400">Location: <span className="text-white">Toronto, Canada</span></p>
      <p className="text-md text-gray-400">Alignment: <span className="text-white">Chaotic Good</span></p>
    </section>
  );
}
