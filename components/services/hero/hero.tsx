import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[calc(100vh-100px)] px-4">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/bg-galerie.png"
        alt="herosection"
        objectPosition="top"
        fill
      />
      <div className="absolute w-full h-full bg-blue-900/30"></div>

      <div className="absolute inset-0 top-16 h-[300px]">
              <Image
                src="/assets/images/backgrounds/Vector2.png" // Remplace par ton image de fond
                alt="Background"
                fill
                objectFit="contain"
                quality={80}
                className="opacity-80"
              />
              {/* <div className="absolute inset-0 bg-black/40"></div> Overlay pour lisibilité */}
    </div>

    
    <div className="absolute top-24 left-3 drop-shadow-lg text-white text-xl sm:text-2xl lg:text-2xl font-semibold">
       Nos Services
    </div>
   

    </div>
  );
}
