import React from 'react';
import { Construction, HardHat, User, Users } from 'lucide-react';
import Image from 'next/image'; // Importation du composant Image de Next.js
;
export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/backgrounds/Rectangle4680.png" // Le chemin de l'image
          alt="Background Image"
          layout="fill" // Remplir toute la zone de l'élément parent
          objectFit="cover" // Le fond doit couvrir l'intégralité du conteneur
          quality={100} // Qualité maximale de l'image
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <Image 
            src="/assets/images/logo-white.png" 
            alt="N Logo" 
            className="h-32 w-32 mx-auto mb-4" 
            width={128} // Largeur de l'image
            height={128} // Hauteur de l'image
          />
          <h2 className="text-xl font-light font-subtitle tracking-wide">
            L&apos;EXCELLENCE AU SERVICE DE VOS ESPACES ET INVESTISSEMENTS
          </h2>
        </div>
        
        {/* Coming Soon Text */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold tracking-wider font-Title text-white/90 border-2 border-white/30 px-8 py-4 rounded-lg">
            COMING SOON!
          </h1>
        </div>
        
        {/* Icons Row */}
        <div className="flex justify-center space-x-16 mb-16">
          <Construction className="w-12 h-12 text-white" />
          <HardHat className="w-12 h-12 text-white" />
          <User className="w-12 h-12 text-white" /> 
          <Users className="w-12 h-12 text-white" />
        </div>
        
        {/* Stay Connected Text */}
        <div className="text-center">
          <p className="text-2xl font-light font-subtitle tracking-wide">
            Restez connecté pour la suite &nbsp;⏳
          </p>
        </div>
      </div>
    </div>
  );
}
