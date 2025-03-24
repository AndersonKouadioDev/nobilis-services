import { Button } from "@nextui-org/react";
import { MapPin, Bed, Bath, Ruler } from "lucide-react";
import Image from "next/image";
import React from 'react';

export default function TerrainBody() {
  const listings = [
    {
 
      title: 'New Apartment Nice View',
      address: '42 Avenue O, Brooklyn',
      bedrooms: 4,
      bathrooms: 1,
      area: 460,
      price: 850
    },
    {

      title: 'New Apartment Nice View',
      address: '42 Avenue O, Brooklyn',
      bedrooms: 4,
      bathrooms: 1,
      area: 460,
      price: 850
    },
  ];

  return (
    <div className="flex flex-col md:flex-wrap lg:flex-row justify-around items-center gap-10 p-6">
      {listings.map((listing, index) => (
        <div key={index} className="border rounded-3xl overflow-hidden w-80">
          <div className="relative">
            
            <Image
            src="/assets/images/illustrations/service-items/service-item.png"
            alt="Apartment view"
            width={320}
            height={240}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />

          </div>
          <div className="p-4 bg-[#d3e0ed]">
            <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
            <p className="text-gray-600 flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              {listing.address}
            </p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4 text-gray-600">
              <span className="flex items-center">
                <Bed className="w-5 h-5 mr-1 text-gray-500" />
                {listing.bedrooms}
              </span>
                <span className="flex items-center">
                <Bath className="w-5 h-5 mr-1 text-gray-500" />
                {listing.bathrooms}
              </span>
                <span className="flex items-center">
                <Ruler className="w-5 h-5 mr-1 text-gray-500" />
                {listing.area} sq ft
              </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold text-primary">
                ${listing.price}/month
              </div>
              <Button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
                Interessé
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}