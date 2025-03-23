import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function NobilisEquipement() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Nobilis Équipement – Du matériel de qualité pour vos projets
            </h1>
            <p className="text-gray-600">
            Pour mener à bien vos travaux et projets, il vous faut des équipements fiables et performants. Nobilis Équipement sélectionne pour vous des produits de qualité, adaptés aux exigences des professionnels comme des particuliers.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-6 flex flex-col gap-4">
            {[
              {
                title: "Matériel de construction",
                description:
                  " Des outils et équipements robustes.",
              },
              {
                title: "Équipements industriels",
                description:
                  "Solutions adaptées aux professionnels.",
              },
              {
                title: " Fournitures diverses",
                description:
                  "Tout le nécessaire pour vos projets.",
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
              title: "Sièges",
              image: "/assets/images/illustrations/service-items/sieges.png",
              alt: "Sièges",
            },
            {
              title: "Armoires",
              image: "/assets/images/illustrations/service-items/armoires.png",
              alt: "Armoires",
            },
            {
              title: "Lampes",
              image: "/assets/images/illustrations/service-items/lampes.png",
              alt: "Lampes",
            },
            {
              title: "Tables",
              image: "/assets/images/illustrations/service-items/tables.png",
              alt: "Tables",
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
