import { Button } from '@nextui-org/react';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesBody() {
  const services = [
    {
      picture: "/assets/images/illustrations/service/immobilier.png",
      title: "NOBILIS IMMOBILIER",
      title2: "Nobilis Immo – Votre Partenaire Immobilier",
      subtitle: "Que vous soyez à la recherche d'un bien, d'un acheteur ou d'un locataire, Nobilis Immo vous accompagne à chaque étape."
    },
    {
      picture: "/assets/images/illustrations/service/solution.png",
      title: "NOBILIS SOLUTION",
      title2: "Nobilis Solutions – L'Expertise au Service de Votre Confort",
      subtitle: "Que vous soyez à la recherche d'un bien, d'un acheteur ou d'un locataire, Nobilis Immo vous accompagne à chaque étape."
    },
    {
      picture: "/assets/images/illustrations/service/equipement.png",
      title: "NOBILIS EQUIPEMENT",
      title2: "Nobilis Équipement – L'Excellence en Fourniture de Matériel",
      subtitle: "Que vous soyez à la recherche d'un bien, d'un acheteur ou d'un locataire, Nobilis Immo vous accompagne à chaque étape."
    }
  ];
  
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Nobilis Services vous accompagne dans trois domaines clés : l&apos;immobilier, les solutions professionnelles et l&apos;équipement. Découvrez nos services adaptés à vos besoins.
        </p>
        
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white overflow-hidden group">
              <div className="relative h-80 w-60 overflow-hidden">
                <Image
                  src={service.picture}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="absolute top-4 left-4 text-white font-bold">
                    {service.title}
                  </h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 text-white">
                    <div className="px-8">
                    <h4 className="font-semibold text-xs mb-2">{service.title2}</h4>
                    <p className="text-xs mb-4">{service.subtitle}</p>
                    </div>
                    
                <div className="flex justify-center">
                  <Button 
                    color="primary" 
                    size="md" 
                    
                    className="rounded-t-full"
                  >
                    <MoveRight size={16} />
                  </Button>
                </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}