import { Button, Card, CardBody, Checkbox, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[calc(100vh-100px)] px-4">
      {/* Image de fond */}
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/images/backgrounds/bg-galerie.png"
        alt="herosection"
        objectPosition="top"
        fill
      />
      <div className="absolute w-full h-full bg-blue-900/30"></div>

      <div className="absolute inset-0 top-16 h-[300px]">
              <Image
                src="/assets/images/backgrounds/Vector.png" // Remplace par ton image de fond
                alt="Background"
                fill
                objectFit="contain"
                quality={80}
                className="opacity-20"
              />
              {/* <div className="absolute inset-0 bg-black/40"></div> Overlay pour lisibilité */}
    </div>

      {/* Contenu */}
      <div className="relative flex flex-col items-center text-white text-xl sm:text-2xl font-semibold gap-12 w-full">
        <Card className="flex flex-col md:flex-row rounded-2xl bg-transparent overflow-hidden max-w-4xl mx-auto">
          {/* Section de gauche avec le texte */}
          <div className="bg-transparent p-8 text-white md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold drop-shadow mb-4">Contactez Nous </h2>
            <h2 className="text-xl font-semibold mb-4">Donnez-nous une touche pour plus d'informations</h2>
            <p className="text-sm font-extralight">
            Inscrivez-vous et profitez de tous les avantages que nous vous proposons, saisissez vos plats et démarrez la transformation de votre restaurant :
            </p>
          </div>

          {/* Formulaire */}
          <CardBody className="p-2 md:w-1/2 bg-white rounded-2xl text-black">
            <form action="#" method="POST" className="space-y-1">
              <Input size="sm" type="text" name="name" label="Nom et prénom"  variant="bordered" />
              <Input size="sm" type="email" name="email" label="Email"  variant="bordered" />
              <Input size="sm" type="tel" name="telephone" label="Téléphone"  variant="bordered" />
              <Textarea size="sm" name="message" label="Message"  variant="bordered" />
              
              <Checkbox name="acceptPolicy" >
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
    </div>
  );
}
