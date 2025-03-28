"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react"

export default function NobilisSolution() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  interface Service {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
  }
  

  const handleOpen = (service: Service) => { 
    setSelectedService(service);
    onOpen();
  };

  const services = [
    {
      title: "Climatisation",
      subtitle: "Installation et maintenance pour un confort optimal toute l'année.",
      image: "/assets/images/illustrations/service-items/climatisation.png",
      alt: "Climatisation",
    },
    {
      title: "Nettoyage professionnel",
      subtitle: "Des services d'entretien impeccables pour vos espaces résidentiels et professionnels.",
      image: "/assets/images/illustrations/service-items/nettoyageprofessionnel.png",
      alt: "Nettoyage professionnel",
    },
    {
      title: "Maintenance et dépannage",
      subtitle: "Interventions rapides pour assurer la sécurité et la durabilité de vos équipements.",
      image: "/assets/images/illustrations/service-items/maintenance&depannage.png",
      alt: "Maintenance et dépannage",
    },
  ]

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
              Un environnement bien entretenu et fonctionnel est essentiel pour votre bien-être et votre productivité.
              Nobilis Solutions vous propose des prestations professionnelles dans plusieurs domaines pour garantir
              confort et sécurité à votre domicile ou votre entreprise.
            </p>
          </div>

          <div className="bg-blue-100 rounded-lg p-6 flex flex-col gap-4">
            {[
              {
                title: "Climatisation",
                description: "Installation et entretien pour un confort optimal.",
              },
              {
                title: "Nettoyage professionnel",
                description: "Espaces propres et hygiéniques, adaptés à vos besoins.",
              },
              {
                title: "Maintenance et dépannage",
                description: "Des interventions rapides et efficaces.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gray-800 rounded-full p-1 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-light">
                  <span className="font-semibold">{service.title}:</span> {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Image Section */}
        <div className="mb-16 flex justify-start">
          <div className="bg-white p-4">
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
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleOpen(service)}
              className="cursor-pointer bg-blue-100 p-4 rounded-2xl text-center w-72 flex flex-col justify-between items-center shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-40">
                <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal NextUI */}
        <Modal className="bg-black/50 text-white" isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque">
          <ModalContent>
            {selectedService && (
              <>
                <ModalHeader className="text-xl font-bold text-white">{selectedService.title}</ModalHeader>
                <ModalBody className="flex flex-col items-center text-center">
                  <Image
                    src={selectedService.image || "/placeholder.svg"}
                    alt={selectedService.alt}
                    width={150}
                    height={80}
                    className="rounded-lg object-contain"
                  />
                  <p className="text-white mt-3">{selectedService.subtitle}</p>
                  {/* <Button color="primary" variant="light" onPress={onOpenChange}>
                    Fermer
                  </Button> */}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

