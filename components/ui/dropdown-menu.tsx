"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { Menu } from "lucide-react";
import Link from "next/link";

export default function BlackMenuMobile() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  

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
    <>
      <Button onPress={onOpen} size="lg" radius="full" variant="flat" className="bg-transparent">
        <Menu  className="text-primary" size={20} /> <div className="hidden md:block">Menu</div> 
      </Button>

      <Drawer size="xs" className="bg-black/50 text-white" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                {/* Menu */}
              </DrawerHeader>
              <DrawerBody>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="block px-4 py-2 text-lg font-medium text-white transition-all duration-300 rounded-lg hover:bg-gray-800 hover:text-gray-300"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </DrawerBody>
              <DrawerFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button> */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
