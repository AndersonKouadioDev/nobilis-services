"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,


} from "@nextui-org/react";
import {  Phone } from "lucide-react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlackMenu from '../../ui/dropdown';
import Input from "@/components/ui/searchbar";
import BlackMenuMobile from "@/components/ui/dropdown-menu";

export const ChickenLogo = () => {
  return (
    <Link href="/" >
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        width={40} // Ajoutez la largeur (en pixels)
        height={40} // Ajoutez la hauteur (en pixels)
        priority // Optionnel, si vous voulez donner la priorité à ce chargement
        className="cursor-pointer object-contain" // Ajout de la classe pour le curseur
      />
    </Link>
  );
};

export default function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathname = usePathname();

  const menuItems = [
    { name: "Accueil", link: "/" },
    { name: "A propos", link: "/propos" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
    { name: "Galeries", link: "/galeries" },
    { name: "Demander un devis", link: "/devis" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent font-worksans backdrop-sepia-0"
      maxWidth="full"
      height={90}
    >
      {/* Logo et Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="hidden text-primary"
        />
        <NavbarBrand>
        <div className="block md:hidden">
            <BlackMenuMobile/>
            </div>
          <ChickenLogo />
          <div className="font-Title text-primary text-2xl md:text-4xl font-bold">NOBILIS SERVICES</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex gap-2 items-center text-secondary">
          <Phone size={20}/>
          <div>+225  51 3237 8321</div>
        </NavbarItem>
        <NavbarItem>
            <div className="hidden md:block">
            <BlackMenu/>
            </div>
            
        </NavbarItem>
        <NavbarItem>
          <div className="hidden lg:block">
          <Input/>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-muted">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link className="w-full h-full text-white" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
