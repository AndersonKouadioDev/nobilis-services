import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function NobilisImmobilier() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Nobilis Immobilier - Trouvez le bien qui vous correspond !
            </h1>
            <p className="text-gray-600">
              Que vous soyez à la recherche d'un logement, d'un local professionnel ou d'un investissement rentable, Nobilis Immo met son expertise à votre service. Grâce à notre connaissance du marché et notre accompagnement sur mesure, nous facilitons votre projet immobilier en toute sérénité.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-6 flex flex-col gap-4">
            {[
              {
                title: "Vente de biens immobiliers",
                description:
                  "Trouvez la propriété idéale ou vendez au meilleur prix avec notre réseau d'experts.",
              },
              {
                title: "Location",
                description:
                  "Nous facilitons la mise en relation entre propriétaires et locataires.",
              },
              {
                title: "Gestion immobilière",
                description:
                  "Confiez-nous l'entretien et l'administration de vos biens en toute sérénité.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gray-800 rounded-full p-1 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-light">
                  <span>{service.title}:</span>{" "}
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Image Section */}
        <div className="mb-16">
          <div className="bg-white p-8">
            <div className="flex justify-start">
              <Image
                src="/assets/images/illustrations/service-items/fauteuil.png"
                alt="Salon moderne avec canapé vert"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row justify-around gap-6">
          {[
            {
              title: "Vente de biens immobiliers",
              image: "/assets/images/illustrations/service-items/bienimmobilier.png",
              alt: "Vente immobilière",
            },
            {
              title: "Location",
              image: "/assets/images/illustrations/service-items/location.png",
              alt: "Location",
            },
            {
              title: "Gestion immobilière",
              image: "/assets/images/illustrations/service-items/gestionimmobilier.png",
              alt: "Gestion immobilière",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 p-2 rounded-2xl text-center h-40 w-48 flex flex-col justify-between items-center"
            >


            <div className="mb-4 p-3 h-48 w-96 relative rounded-lg">
            <Image src={service.image} alt={service.alt} fill className="object-contain" />
            </div>

              <h3 className="text-xl font-light text-muted mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
