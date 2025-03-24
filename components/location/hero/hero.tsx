import Image from "next/image";
import BreadcrumbNav from "./breadcrumbs";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[calc(100vh-300px)] lg:min-h-[calc(100vh-100px)] px-4">
      {/* Image de fond principale */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/bg-galerie.png"
        alt="herosection"
        objectPosition="top"
        fill
        priority
      />
      <div className="absolute w-full h-full bg-blue-900/30"></div>

      {/* Image décorative supplémentaire */}
      <div className="absolute inset-0 top-16 h-[250px] sm:h-[300px] md:h-[350px]">
        <Image
          src="/assets/images/backgrounds/Vector2.png"
          alt="Background"
          fill
          objectFit="contain"
          quality={80}
          className="opacity-80"
        />
      </div>

      {/* Texte adaptatif */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-6 md:left-10 text-white text-lg sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
      <BreadcrumbNav/>
      </div>
    </div>
  );
}
