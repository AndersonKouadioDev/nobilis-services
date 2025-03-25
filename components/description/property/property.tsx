import React from 'react';
import Image from 'next/image';
import { 
  AreaChart,
  Bed,
  Bath,
  Building,
  Wifi,
  CircleParking,
  ArrowDownUp
} from 'lucide-react';

export default function PropertyDetails() {
  return (
    <div className="bg-white p-10 flex flex-col md:flex-row justify-center gap-5 ">
      {/* Image à gauche */}
      <div className="w-full md:w-2/3 relative">
        <Image 
          src="/assets/images/illustrations/service-items/proprety.png" 
          alt="Property Image"
          width={600}
          height={250}
          className="rounded-lg object-cover h-full"
        />
      </div>

      {/* Détails à droite */}
      <div className="w-full md:w-1/3 pt-6 md:p-0">
        <h2 className="text-xl font-semibold mb-4">Property details</h2>
        <div className="space-y-3">
          <div className="flex items-center">
            <AreaChart className="mr-3 text-gray-600" size={20} />
            <span>Total area</span>
            <span className="ml-auto font-medium">100 sq.ft</span>
          </div>
          <div className="flex items-center">
            <Bed className="mr-3 text-gray-600" size={20} />
            <span>Bedrooms</span>
            <span className="ml-auto font-medium">2</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-3 text-gray-600" size={20} />
            <span>Bathrooms</span>
            <span className="ml-auto font-medium">2</span>
          </div>
          <div className="flex items-center">
            <Building className="mr-3 text-gray-600" size={20} />
            <span>Floor</span>
            <span className="ml-auto font-medium">3rd</span>
          </div>
          <div className="flex items-center">
            <ArrowDownUp className="mr-3 text-gray-600" size={20} />
            <span>Elevator</span>
            <span className="ml-auto font-medium">2</span>
          </div>
          <div className="flex items-center">
            <CircleParking className="mr-3 text-gray-600" size={20} />
            <span>Parking</span>
            <span className="ml-auto font-medium">Yes</span>
          </div>
          <div className="flex items-center">
            <Wifi className="mr-3 text-gray-600" size={20} />
            <span>Wi-Fi</span>
            <span className="ml-auto font-medium">Yes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
