import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

type Press = {
  name: string;
  picture: string;
};

const press: Press[] = [
  {
    name: "Client 1",
    picture: "/assets/images/illustrations/page-accueil/client1.png"
  },
  {
    name: "Client 2",
    picture: "/assets/images/illustrations/page-accueil/logo-1.png"
  },
  {
    name: "Client 3",
    picture: "/assets/images/illustrations/page-accueil/logo-3.png"
  },
  {
    name: "Client 4",
    picture: "/assets/images/illustrations/page-accueil/client4.png"
  },
  {
    name: "Client 5",
    picture: "/assets/images/illustrations/page-accueil/logo-5.png"
  }
];

export function Client() {
  return (
    <section id="press" className="bg-white">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s] flex items-center">
              {press.map((logo) => (
                <div key={logo.name} className="relative h-10 w-40 mx-2">
                  <Image
                    src={logo.picture}
                    alt={`logo-${logo.name}`}
                    layout="fill"
                    objectFit="contain"
                    className="dark:brightness-0 dark:invert"
                  />
                </div>
              ))}
            </Marquee>

            {/* Dégradé aux extrémités pour effet visuel */}
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white via-white/70 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
