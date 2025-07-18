import React from 'react';

const traits = [
  'Responsive Design',
  'Modular Components',
  'Dark Mode Toggling',
  'Terminal Goblin',
  'Willing to Fight Vite in a Waffle House Parking Lot',
];

export default function Traits() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold mb-2">Traits & Proficiencies</h2>
      <ul className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <li
            key={trait}
            className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full"
          >
            {trait}
          </li>
        ))}
      </ul>
    </section>
  );
}
