import { Button } from '@nextui-org/react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Galerie() {
  const projects = [
    {
      id: 1,
      image: "/assets/images/illustrations/page-accueil/div.project.png",
      location: "Immeuble Postel, Abidjan Plateau",
      category: "Travaux de construction",
    },
    {
      id: 2,
      image: "/assets/images/illustrations/page-accueil/div.project-i.png",
      location: "Immeuble Postel, Abidjan Plateau",
      category: "Travaux de construction",
    },
    {
      id: 3,
      image: "/assets/images/illustrations/page-accueil/div.project-img.png",
      location: "Immeuble Postel",
      category: "Réhabilitation",
    },
  ];

  return (
    <div className="relative text-white py-12">
      
      <div className="absolute inset-0 min-h-screen">
        <Image
          src="/assets/images/backgrounds/bg-galerie.png" 
          alt="Galerie Background"
          layout="fill"
          objectFit="cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50"></div> 
      </div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-2">Galeries</h2>
        <p className="text-lg text-center mb-10">Explorez nos réalisations</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.category}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 bg-[#E6EEF5] relative text-gray-800">
                <div className="bg-primary absolute  -top-3 w-64 p-1 rounded-xl flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-white mr-2" />
                    <span className="text-sm text-white">{project.location}</span>
                </div>
                <h3 className="text-lg pl-3 font-medium">{project.category}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button as={Link} href="/galeries" className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-full transition-colors">
            Voir Plus
          </Button>
        </div>
      </div>
    </div>
  );
}
