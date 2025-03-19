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
  Button,

} from "@nextui-org/react";
import { CalendarDays, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlackMenu from '../../ui/dropdown';
import Input from "@/components/ui/searchbar";

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
  const pathname = usePathname();

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
          className="sm:hidden text-primary"
        />
        <NavbarBrand>
          <ChickenLogo />
          <div className="font-Title text-primary text-4xl font-bold">NOBILIS SERVICES</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {/* {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            className={`${
              pathname === item.link
                ? "bg-primary rounded-xl text-white py-1 px-2"
                : "text-white"
            }`}
          >
            <Link
              href={item.link}
              className={`px-4 py-2 rounded   ${
                pathname === item.link ? "text-white" : "text-primary"
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))} */}
        
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem>
        <Input color="default" type="text" variant="underlined" label="Recherche" className="w-full" endContent={<Search className="w-5 h-5 text-black" />}/>
        </NavbarItem> */}
        <NavbarItem className="flex gap-2 items-center text-secondary">
          <Phone size={20}/>
          <div>+225  51 3237 8321</div>
        </NavbarItem>
        <NavbarItem>
            {/* <Button
              as={Link}
              className="hidden md:flex bg-secondary text-white gap-2"
              href="/brinner"
              variant="flat"
            >
              <CalendarDays className="w-5 h-5" />
              Réserver un brinner
            </Button> */}
            <BlackMenu/>
        </NavbarItem>
        <NavbarItem>
          <Input/>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-primary">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link className="w-full h-full text-white" href={item.link}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem>
        <Button
              as={Link}
              className=" bg-secondary text-white gap-2 flex font-semibold w-full"
              href="/brinner"
              variant="flat"
            >
              <CalendarDays className="w-5 h-5" />
              Réserver un brinner
            </Button>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
