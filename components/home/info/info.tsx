"use client";

import { Input, Textarea, Checkbox, Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function Info() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-4 md:px-8">
      {/* Image en arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/bg-rectangle.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          
        />
      </div>

      <Card className="flex flex-col md:flex-row rounded-2xl bg-transparent overflow-hidden relative z-10 shadow-lg">
        {/* Section de gauche avec le texte */}
        <div className="bg-transparent p-6 md:p-8 text-black md:text-white md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contactez-nous pour plus d'informations</h2>
          <p className="text-sm md:text-base">
            Inscrivez-vous et profitez de tous les avantages que nous vous proposons. 
            Saisissez vos informations et commencez votre transformation.
          </p>
        </div>

        {/* Formulaire */}
        <CardBody className="p-6 md:w-1/2 bg-white rounded-2xl">
          <form action="#" method="POST" className="space-y-4">
            <Input type="text" name="name" label="Nom et prénom" isRequired variant="bordered" fullWidth />
            <Input type="email" name="email" label="Email" isRequired variant="bordered" fullWidth />
            <Input type="tel" name="telephone" label="Téléphone" isRequired variant="bordered" fullWidth />
            <Textarea name="message" label="Message" isRequired variant="bordered" fullWidth />
            
            <Checkbox name="acceptPolicy" isRequired>
              J'ai lu et accepté la politique de confidentialité.
            </Checkbox>

            <div className="flex justify-center md:justify-start">
              <Button type="submit" color="primary" radius="full" className="w-full md:w-auto">
                Envoyer
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
