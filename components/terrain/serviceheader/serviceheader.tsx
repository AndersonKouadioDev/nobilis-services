// import { Button } from "@nextui-org/react";
// import Link from "next/link";
import React from "react";

export default function ServicesHeader() {
  // const tabs = [
  //   { id: "bien vente", label: "BIEN EN VENTE", link: "" },
  //   { id: "appartement", label: "APPARTEMENT", link: "#" },
  //   { id: "villa", label: "VILLA", link: "#" },
  // ];

  return (
    <div className="bg-blue-50 py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-black mb-2">TERRAINS</h2>
      <p className="text-black mb-10">
      Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
      </p>

      {/* <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.link} passHref>
            <Button
              radius="full"
              className="bg-transparent hover:bg-[#FFF8F6] hover:border active:bg-[#FFF8F6] active:border"
            >
              {tab.label}
            </Button>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
