import { Button } from '@nextui-org/react';
import React from 'react';

export default function ServicesHeader() {

  
  const tabs = [
    { id: 'all', label: 'TOUS NOS SERVICES', link: "#" },
    { id: 'immobilier', label: 'NOBILIS IMMOBILIER', link: "#" },
    { id: 'solution', label: 'NOBILIS SOLUTION', link: "#" },
    { id: 'equipement', label: 'NOBILIS EQUIPEMENT', link: "#" }
  ];
  
  return (
    <div className="bg-blue-50 py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-black mb-2">SERVICES</h2>
      <p className="text-black mb-10">Découvrez nos solutions adaptées à vos besoins</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            href={tab.link}
            radius='full'
            className="bg-transparent hover:bg-[#FFF8F6] hover:border active:bg-[#FFF8F6] active:border"
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
}