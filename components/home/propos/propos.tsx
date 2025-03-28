import { NumberTicker } from "@/components/magicui/number-ticker";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Propos() {
  return (
    <section className="p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-10">
        {/* Texte et informations */}
        <div className="max-w-lg space-y-6 text-muted">
          <h2 className="text-2xl font-bold text-primary">À propos</h2>
          <h3 className="text-3xl font-semibold">
            Transformer la maison de vos rêves en réalité
          </h3>
          <p>
            Nobilis Service, c’est une expertise complète réunie sous une seule enseigne. Que ce soit pour trouver votre bien immobilier, équiper votre entreprise ou bénéficier de solutions professionnelles adaptées, nous répondons à vos besoins avec engagement et qualité.
          </p>

          <Button as={Link} href="/services" radius="full" variant="solid" className="bg-muted text-white">
            En savoir plus sur Nobilis Service
          </Button>

          {/* Section des compteurs */}
            <div className="flex gap-8 mt-6">
            {[
                { value: 250, label: "Biens vendus" },
                { value: 150, label: "Clients satisfaits" },
                { value: 50, label: "Projets en cours" },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-primary font-semibold text-xl">
                <div className="flex text-primary items-center  gap-2">
                    <NumberTicker className="text-primary font-bold" value={item.value} />
                    <Plus className="font-bold" size={20} />
                </div>
                <span className="text-sm text-black font-extralight">{item.label}</span>
                </div>
            ))}
            </div>

        </div>

        {/* Image */}
        <div className="w-full max-w-md">
          <Image
            className="object-contain rounded-xl shadow-lg"
            src="/assets/images/illustrations/page-accueil/propos.png"
            alt="Illustration de Nobilis Service"
            height={400}
            width={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
