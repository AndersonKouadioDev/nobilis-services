"use client";

import { Input, Textarea, Checkbox, Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function Info() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4">
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/bg-rectangle.png" // Remplace par ton image de fond
          alt="Background"
          layout="fill"
          objectFit="contain"
          quality={80}
        />
        {/* <div className="absolute inset-0 bg-black/40"></div> Overlay pour lisibilité */}
      </div>

      <Card className="flex flex-col md:flex-row rounded-2xl bg-transparent overflow-hidden">
        {/* Section de gauche avec le texte */}
        <div className="bg-transparent p-8 text-white md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contactez-nous pour plus d'informations</h2>
          <p className="text-sm">
            Inscrivez-vous et profitez de tous les avantages que nous vous proposons. 
            Saisissez vos informations et commencez votre transformation.
          </p>
        </div>

        {/* Formulaire */}
        <CardBody className="p-6 md:w-1/2 bg-white">
          <form action="#" method="POST" className="space-y-4">
            <Input type="text" name="name" label="Nom et prénom" isRequired variant="bordered" />
            <Input type="email" name="email" label="Email" isRequired variant="bordered" />
            <Input type="tel" name="telephone" label="Téléphone" isRequired variant="bordered" />
            <Textarea name="message" label="Message" isRequired variant="bordered" />
            
            <Checkbox name="acceptPolicy" isRequired>
              J'ai lu et accepté la politique de confidentialité.
            </Checkbox>

            <div className="flex justify-start">
              <Button type="submit" color="primary" radius="full">
                Envoyer
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
