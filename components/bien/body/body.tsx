import React from "react";
import Image from "next/image";
import { LineChart, Shield, Eye, Handshake } from "lucide-react";
import { Button } from "@nextui-org/react";
import MoreInfo from './modal';

export default function BienBody() {
  const features = [
    {
      icon: <LineChart className="text-muted w-6 h-6" />,
      text: "Une expertise pointue du marché",
    },
    {
      icon: <Shield className="text-muted w-6 h-6" />,
      text: "Une gestion efficace et sans stress",
    },
    {
      icon: <Eye className="text-muted w-6 h-6" />,
      text: "Une transparence totale",
    },
    {
      icon: <Handshake className="text-muted w-6 h-6" />,
      text: "Un réseau de partenaires fiables",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Image */}
      <div className="md:w-1/2 m-4 md:m-10 relative">
        <Image
          src="/assets/images/illustrations/service-items/bien.png"
          alt="Modern architectural property"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>

      {/* Right side - Content */}
      <div className="md:w-1/2 flex flex-col justify-center p-8 md:p-16 bg-white">
        <div className="flex flex-col justify-center gap-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-2xl text-center text-gray-800">
          Pourquoi nous confier la gestion de votre patrimoine ?
        </h1>
        <div className="text-xs md:text-sm font-thin mb-6 drop-shadow-2xl text-center text-gray-800">Votre patrimoine mérite une gestion experte et sécurisée.</div>
        </div>
        <p className="text-gray-600 mb-8">
          Chez Nobilis Immo, nous comprenons que votre patrimoine immobilier est bien plus qu'un simple investissement. C'est un projet de vie, une source de revenus ou encore un héritage précieux. C'est pourquoi nous vous offrons une gestion rigoureuse, transparente et performante pour valoriser et sécuriser vos biens.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">{feature.icon}</div>
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <MoreInfo/>
      </div>
    </div>
  );
}
