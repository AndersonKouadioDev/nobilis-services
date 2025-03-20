
import { Play } from "lucide-react";
import Image from "next/image";





export default function Hero() {
  return (
    <div className="relative flex items-center justify-between w-full h-[calc(100vh-100px)]">
      <Image
        className="absolute inset-0 w-full h-full object-cover shrink-0"
        src="/assets/images/backgrounds/bg-galerie.png"
        alt="herosection"
        objectPosition="top"
        fill
      />
      <div className="absolute w-full h-full bg-blue-900/30 px-4"></div>

      <div className="absolute px-4 pt-4 inset-0 flex flex-col bottom-2 items-start justify-center text-left text-white text-xl sm:text-2xl lg:text-2xl font-semibold gap-20 lg:gap-32">

        {/* Breadcrumbs */}
        <div className="relative drop-shadow-lg">
        A propos
        </div>

        {/* Texte principal */}
        <div className=" mx-auto relative p-8 flex flex-col bottom-16 gap-6">
          <Play className="text-white bg-primary p-2 cursor-pointer hover:scale-150 rounded-full" size={70}/>
        </div>        
      </div>

      
    </div>
  );
}