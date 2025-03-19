"use client"
import Image from "next/image";
import { Button } from "@nextui-org/react";



export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-100px)] rounded-b-full">
      <Image
        className="absolute inset-0 w-full h-full object-cover shrink-0 rounded-b-[100px]"
        src="/assets/images/backgrounds/bg-1.png"
        alt="herosection"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* <div className="absolute w-full h-full bg-black/25 px-4"></div> */}
      <div className="absolute px-20 inset-0 flex flex-col items-start justify-center text-center text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-10 lg:gap-20">
        {/* Texte principal */}
        <div className="font-Title text-xl sm:text-3xl lg:text-5xl text-start font-semibold drop-shadow-lg">
        NOBILIS <br /> IMMOBILIER
        </div>
        <div className="font-subtitle text-sm sm:text-base lg:text-lg font-thin text-start text-balance">
        Trouvez, vendez ou louez votre bien en toute sérénité avec Nobilis Immo. <br /> Notre expertise vous guide à chaque étape
        </div>

        {/* Bouton bien espacé */}

        <Button variant="flat" className="bg-black/30 text-white">
            Voir plus
        </Button>
        
      </div>
      
      
    </div>
  );
}