import React from 'react';
import { 
  Building2, 
  Lightbulb, 
  Handshake, 
  Award 
} from 'lucide-react';

export default function Services() {
  const serviceData = [
    {
      icon: <Building2 size={24} />,
      title: "Tous travaux bâtiments",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Idée de conception",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <Handshake size={24} />,
      title: "Transactions immobilières",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
      icon: <Award size={24} />,
      title: "Excellentes solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 px-4">
      {serviceData.map((service, index) => (
        <div key={index} className="flex flex-col items-center border-r-1 max-w-xs">
          <div className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center mb-4">
            {service.icon}
          </div>
          <h3 className="bg-gradient-to-r from-blue-900 to-blue-100 bg-clip-text text-transparent font-medium text-lg mb-2">{service.title}</h3>
          <p className="text-muted text-sm text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
}