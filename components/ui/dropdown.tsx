"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Menu } from "lucide-react";


export default function BlackMenu(){
    const menuItems = [
        { name: "Accueil", link: "/" },
        { name: "A propos", link: "/propos" },
        { name: "Services", link: "/services" },
        { name: "Blog", link: "/blog" },
        { name: "Galeries", link: "/galeries" },
        { name: "Demander un devis", link: "/devis" },
        { name: "Contact", link: "/contact" },
      ];
      return(
        <Dropdown>
        <DropdownTrigger>
          <Button size="lg" radius="full" variant="flat" className="bg-black/50 text-white" endContent={<Menu color="white" size={20}/>}>Menu</Button>
        </DropdownTrigger>
        <DropdownMenu color="secondary" aria-label="Dynamic Actions" items={menuItems}>
          {(item) => (
            <DropdownItem
              key={item.name}
              href={item.link}
            >
              {item.name}
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
      );
}