import React from 'react';

export default function TestTailwindClasses() {
  return (
    <section className="p-6 rounded-lg border border-dashed border-gray-700 space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400">Tailwind Test Area</h2>

      {/* Text Colors */}
      <div className="flex flex-wrap gap-2">
        <span className="text-red-500">text-red-500</span>
        <span className="text-blue-500">text-blue-500</span>
        <span className="text-green-500">text-green-500</span>
        <span className="text-purple-500">text-purple-500</span>
      </div>

      {/* Background Colors */}
      <div className="flex flex-wrap gap-2">
        <div className="bg-red-500 text-white px-3 py-1 rounded">bg-red-500</div>
        <div className="bg-blue-500 text-white px-3 py-1 rounded">bg-blue-500</div>
        <div className="bg-green-500 text-white px-3 py-1 rounded">bg-green-500</div>
        <div className="bg-purple-500 text-white px-3 py-1 rounded">bg-purple-500</div>
      </div>

      {/* Font Sizes */}
      <div className="space-y-1">
        <p className="text-sm">text-sm</p>
        <p className="text-base">text-base</p>
        <p className="text-lg">text-lg</p>
        <p className="text-xl font-semibold">text-xl</p>
        <p className="text-2xl font-bold">text-2xl</p>
      </div>

      {/* Layout Utilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="bg-gray-800 p-2 text-center rounded">Col 1</div>
        <div className="bg-gray-800 p-2 text-center rounded">Col 2</div>
        <div className="bg-gray-800 p-2 text-center rounded">Col 3</div>
      </div>

      {/* Flexbox Example */}
      <div className="flex items-center gap-2 bg-gray-900 p-2 rounded">
        <span className="bg-indigo-500 text-white px-3 py-1 rounded">Flex</span>
        <span className="bg-pink-500 text-white px-3 py-1 rounded">Box</span>
        <span className="bg-lime-500 text-black px-3 py-1 rounded">Row</span>
      </div>
    </section>
  );
}
