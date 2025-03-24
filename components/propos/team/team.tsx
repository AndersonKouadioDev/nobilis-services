import React from "react";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Cécile Amon",
      role: "Co-Présidente",
      image: "/assets/images/illustrations/propos/team1.png",
    },
    {
      name: "Samuel Amon",
      role: "Co-Président",
      image: "/assets/images/illustrations/propos/team2.png",
    },
    {
      name: "Cécile Amon",
      role: "Chargé des Relations Humaines",
      image: "/assets/images/illustrations/propos/team3.png",
    },
    {
      name: "Cécile Amon",
      role: "Comptable",
      image: "/assets/images/illustrations/propos/team4.png",
    },
    {
      name: "Samuel Amon",
      role: "Chef des Opérations",
      image: "/assets/images/illustrations/propos/team5.png",
    },
    {
      name: "Cécile Amon",
      role: "Responsable des Travaux",
      image: "/assets/images/illustrations/propos/team6.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-muted text-center mb-10">
        L&apos;équipe
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xs text-white/80 font-light">{member.role}</p>
                <h3 className="text-white font-medium">{member.name}</h3>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
