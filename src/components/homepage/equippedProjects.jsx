import React from 'react';

const projects = [
  {
    slot: 'Primary',
    name: 'React Portfolio',
    desc: 'Personal site built with Vite + Tailwind + GH Pages',
    link: '/',
  },
  {
    slot: 'Secondary',
    name: 'Interactive Style Guide',
    desc: 'SCSS design system & UI tokens for a client prototype',
    link: '#',
  },
  {
    slot: 'Utility Slot',
    name: 'Horse Show Companion',
    desc: 'Scheduling & notes app (WIP)',
    link: '#',
  },
];

export default function EquippedProjects() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold mb-4">Equipped Projects</h2>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li key={proj.slot} className="bg-gray-800 p-4 rounded shadow border border-gray-700">
            <h3 className="text-indigo-300 font-semibold uppercase text-sm tracking-wide">
              {proj.slot}
            </h3>
            <p className="text-white text-lg font-bold">{proj.name}</p>
            <p className="text-gray-300 text-sm">{proj.desc}</p>
            <a href={proj.link} className="text-lime-400 hover:text-lime-300 text-sm underline-offset-4 hover:underline transition">
              View project →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
