"use client";

import { Input } from "@nextui-org/react";
import { Send } from "lucide-react";
import Image from "next/image";

export default function BeforeFooter() {
  return (
    <div className="w-full bg-[#072449] py-12 px-4 flex flex-col md:flex-row items-center gap-6">
      {/* 📌 Image */}
      <div className="flex-shrink-0">
        <Image
          src="/assets/images/logo-name.png" // Remplace par ton image
          alt="Newsletter"
          width={150}
          height={150}
          
        />
      </div>

      {/* 📌 Texte */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm text-white">
        Abonnez-vous à notre newsletter
        </p>
      </div>

      {/* 📌 Input avec bouton */}
      <div className="w-full md:w-auto flex items-center gap-2">
        <Input type="email" placeholder="Votre adresse mail" endContent={<Send size={15} className="text-[#072449]"/>} variant="flat" radius="full" className="flex-1" />
      </div>
    </div>
  );
}
