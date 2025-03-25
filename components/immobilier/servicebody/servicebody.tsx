"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";


export default function NobilisImmobilier() {
  const [isOpen, setIsOpen] = useState(false);  
  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Nobilis Immobilier - Trouvez le bien qui vous correspond !
            </h1>
            <p className="text-gray-600">
              Que vous soyez à la recherche d&apos;un logement, d&apos;un local professionnel ou d&apos;un investissement rentable, Nobilis Immo met son expertise à votre service. Grâce à notre connaissance du marché et notre accompagnement sur mesure, nous facilitons votre projet immobilier en toute sérénité.
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
          {/* Vente de biens immobiliers - Ouvre un modal */}
          <div onClick={() => setIsOpen(true)} className="w-72 cursor-pointer">
            <div className="bg-blue-100 p-4 rounded-2xl text-center flex flex-col justify-between items-center shadow-md transition-transform transform hover:scale-105">
              <div className="relative w-full h-40">
                <Image src="/assets/images/illustrations/service-items/bienimmobilier.png" alt="Vente immobilière" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Vente de biens immobiliers</h3>
            </div>
          </div>

          {/* Autres services - Liens directs */}
          {[
            {
              title: "Location",
              image: "/assets/images/illustrations/service-items/location.png",
              alt: "Location",
              link: "/services/immobilier/location",
            },
            {
              title: "Gestion immobilière",
              image: "/assets/images/illustrations/service-items/gestion-immobilier.png",
              alt: "Gestion immobilière",
              link: "/services/immobilier/bien",
            },
          ].map((service, index) => (
            <Link key={index} href={service.link} className="w-72">
              <div className="bg-blue-100 p-4 rounded-2xl text-center flex flex-col justify-between items-center shadow-md transition-transform transform hover:scale-105">
                <div className="relative w-full h-40">
                  <Image src={service.image} alt={service.alt} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mt-4">{service.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

     {/* MODAL - Vente de biens immobiliers */}
     <div>
      <Modal isOpen={isOpen} size="xs" onClose={() => setIsOpen(false)}>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
          {[
            {
              title: "Appartement/Villa",
              image: "/assets/images/illustrations/service-items/bienimmobilier.png",
              alt: "Appartement/Villa",
              link: "/services/immobilier/vente",
            },
            {
              title: "Terrains",
              image: "/assets/images/illustrations/service-items/bienimmobilier.png",
              alt: "Terrains",
              link: "/services/immobilier/terrain",
            },
          ].map((service, index) => (
            <Link key={index} href={service.link} className="w-60">
              <div className="bg-blue-100 p-4 rounded-2xl text-center flex flex-row justify-between items-center shadow-md transition-transform transform hover:scale-105">
                <div className="relative w-full h-28">
                  <Image src={service.image} alt={service.alt} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mt-4">{service.title}</h3>
              </div>
            </Link>
          ))}
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>

    </div>
  );
}
