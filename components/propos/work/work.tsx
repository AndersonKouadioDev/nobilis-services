import React from 'react';
import Image from 'next/image';
import { CircleDot } from 'lucide-react';

export default function Work() {
  const servicesData = {
    immobiliers: [
      "Gestion de patrimoine immobilier",
      "Suivi administratif et financier",
      "Conseil en optimisation patrimoniale",
      "Reporting régulier aux propriétaires",
      "Transaction immobilière",
      "Achat et vente de biens",
      "Étude de marché et estimation",
      "Accompagnement juridique"
    ],
    techniques: [
      "Rénovation et réhabilitation",
      "Rénovation complète",
      "Mise aux normes",
      "Amélioration énergétique",
      "Maintenance et entretien",
      "Contrats d'entretien préventif",
      "Interventions d'urgence",
      "Suivi technique des bâtiments"
    ],
    complementaires: [
      "Aménagement professionnel",
      "Fourniture de mobilier de bureau",
      "Installation et montage",
      "Conseil en aménagement d'espace",
      "Service recouvrement",
      "Gestion des impayés",
      "Relance clients",
      "Médiation"
    ]
  };

  return (
    <div className="bg-gray-100 relative">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-medium text-muted text-center mb-12">Ce que nous faisons !</h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image à gauche */}
        <div className="lg:w-2/5">
          <Image 
            src="/assets/images/illustrations/propos/work.png" 
            alt="Chantier de construction" 
            width={500} 
            height={500} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Services à droite */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Services Immobiliers */}
          <div className="bg-white rounded-lg border border-gray-200 p-2">
            <h3 className="text-xl text-blue-600 font-medium flex items-center gap-2 mb-4">
              <CircleDot size={18} className="text-blue-600" />
              Services Immobiliers
            </h3>
            <ul >
              {servicesData.immobiliers.map((service, index) => (
                <li key={index} className="text-gray-600 text-sm flex">
                  <span className="mr-2">-</span> 
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Techniques */}
          <div className="bg-white rounded-lg border border-gray-200 p-2">
            <h3 className="text-xl text-blue-600 font-medium flex items-center gap-2 mb-4">
              <CircleDot size={18} className="text-blue-600" />
              Services Techniques
            </h3>
            <ul>
              {servicesData.techniques.map((service, index) => (
                <li key={index} className="text-gray-600 text-sm flex">
                  <span className="mr-2">-</span> 
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Complémentaires */}
          <div className="bg-white rounded-lg border border-gray-200 p-2 ">
            <h3 className="text-xl text-blue-600 font-medium flex items-center gap-2 mb-4">
              <CircleDot size={18} className="text-blue-600" />
              Services Complémentaires
            </h3>
            <ul>
              {servicesData.complementaires.map((service, index) => (
                <li key={index} className="text-gray-600 text-sm flex">
                  <span className="mr-2">-</span> 
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Image
            src="/assets/images/illustrations/propos/work-small.png" 
            alt="Professional woman in business attire" 
            width={800}
            height={800}
            className="object-contain absolute right-0 bottom-0"
    />
    </div>
  );
}
