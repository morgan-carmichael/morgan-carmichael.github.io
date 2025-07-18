import React from 'react';

const stats = [
  { label: 'HTML', value: 9 },
  { label: 'CSS/SCSS', value: 9 },
  { label: 'JavaScript', value: 8 },
  { label: 'React', value: 7 },
  { label: 'Tailwind', value: 8 },
  { label: 'Git/GitHub', value: 8 },
  { label: 'Accessibility', value: 7 },
  { label: 'Troubleshooting', value: 10 },
];

export default function StatBlock() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-800 hover:bg-gray-700 transition-colors p-3 rounded-lg shadow-inner text-center border border-gray-700"
        >
          <h3 className="text-lime-300 font-semibold tracking-tight">{stat.label}</h3>
          <p className="text-white text-xl font-bold">{stat.value} / 10</p>
        </div>
      ))}
    </section>
  );
}
