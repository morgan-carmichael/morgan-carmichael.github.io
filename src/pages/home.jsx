import Layout from '../components/layout'
import React from 'react';
import BasicInfo from '../components/homepage/basicInfo';
import StatBlock from '../components/homepage/statBlock';
import Traits from '../components/homepage/traits';
import FlavorText from '../components/homepage/flavorText';
import EquippedProjects from '../components/homepage/equippedProjects';

export default function Home() {
  return (
    <main className="debug max-w-4xl mx-auto px-4 py-10 space-y-10 text-white">
      <BasicInfo />
      <StatBlock />
      <Traits />
      <FlavorText />
      <EquippedProjects />
    </main>
  );
}

