import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="bg-primary text-white px-8 pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col justify-center gap-4 md:gap-10 items-start">
            {/* Address Section */}
            <div className="flex flex-col gap-1 items-start font-subtitle">
              <div>Abidjan, Marcory Zone 4</div>
              <div>Rue Alex Fleming Immeuble SACS</div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap md:flex-row gap-4 items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-6 h-6 text-white hover:text-gray-300" />
              </Link>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-6 h-6 text-white hover:text-gray-300" />
              </Link>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-6 h-6 text-white hover:text-gray-300" />
              </Link>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-6 h-6 text-white hover:text-gray-300" />
              </Link>
            </div>
          </div>

          {/* Explorer Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-6">
              <li><Link href="/propos" className="hover:text-primary-300">A propos</Link></li>
              <li><Link href="/services" className="hover:text-primary-300">Services</Link></li>
              <li><Link href="/galerie" className="hover:text-primary-300">Galeries</Link></li>
              <li><Link href="/blog" className="hover:text-primary-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary-300">Contacts</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">LÉGALES</h3>
            <ul className="space-y-6">
              <li><Link href="/support" className="hover:text-primary-300">Support</Link></li>
              <li><Link href="/politique" className="hover:text-primary-300">Politique de confidentialité</Link></li>
              <li><Link href="/condition" className="hover:text-primary-300">Termes et conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-6 px-4 text-center text-white border-t text-sm">
        <p>
          © Copyright 2025 |{" "}
          <span>
            Designed by{" "}
            <Link 
              href="https://lunion-lab.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white font-semibold underline hover:text-primary-700"
            >
              Lunions-Lab
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
