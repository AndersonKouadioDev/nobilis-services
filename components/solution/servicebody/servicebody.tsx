import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function NobilisSolution() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Nobilis Solutions – Des services sur mesure pour votre confort
            </h1>
            <p className="text-gray-600">
            Un environnement bien entretenu et fonctionnel est essentiel pour votre bien-être et votre productivité. Nobilis Solutions vous propose des prestations professionnelles dans plusieurs domaines pour garantir confort et sécurité à votre domicile ou votre entreprise.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-6 flex flex-col gap-4">
            {[
              {
                title: "Climatisation",
                description:
                  " Installation et entretien pour un confort optimal.",
              },
              {
                title: "Nettoyage professionnel",
                description:
                  " Espaces propres et hygiéniques, adaptés à vos besoins.",
              },
              {
                title: " Maintenance et dépannage",
                description:
                  " Des interventions rapides et efficaces.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gray-800 rounded-full p-1 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-light">
                  <span className="font-semibold">{service.title}:</span>{" "}
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Image Section */}
        <div className="mb-16 flex justify-start">
          <div className="bg-white p-4 ">
            <Image
              src="/assets/images/illustrations/service-items/fauteuil.png"
              alt="Salon moderne avec canapé vert"
              width={400}
              height={250}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "Climatisation",
              image: "/assets/images/illustrations/service-items/climatisation.png",
              alt: "Climatisation",
            },
            {
              title: "Nettoyage professionnel",
              image: "/assets/images/illustrations/service-items/nettoyageprofessionnel.png",
              alt: "Nettoyage professionnel",
            },
            {
              title: "Maintenance et dépannage",
              image: "/assets/images/illustrations/service-items/maintenance&depannage.png",
              alt: "Maintenance et dépannage",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-2xl text-center w-72 flex flex-col justify-between items-center shadow-md"
            >
              <div className="relative w-full h-40">
                <Image src={service.image} alt={service.alt} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
