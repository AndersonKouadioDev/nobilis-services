import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function ServicesHeader() {
  const tabs = [
    { id: "all", label: "TOUS NOS SERVICES", link: "" },
    { id: "immobilier", label: "NOBILIS IMMOBILIER", link: "/services/immobilier" },
    { id: "solution", label: "NOBILIS SOLUTION", link: "/services/solution" },
    { id: "equipement", label: "NOBILIS EQUIPEMENT", link: "/services/equipement" },
  ];

  return (
    <div className="bg-blue-50 py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-black mb-2">SERVICES</h2>
      <p className="text-black mb-10">
        Découvrez nos solutions adaptées à vos besoins
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.link} >
            <Button
              radius="full"
              className="bg-transparent hover:bg-[#FFF8F6] hover:border active:bg-[#FFF8F6] active:border"
            >
              {tab.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
