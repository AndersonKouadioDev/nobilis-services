import React from 'react';
import { Search } from 'lucide-react'; // Importation de l'icône de recherche

const Input = () => {
  return (
    <div className="p-3 overflow-hidden w-[50px] h-[50px] hover:w-[270px] bg-secondary shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
      <div className="flex items-center justify-center fill-white">
        <Search size={18} color="white" /> 
      </div>
      <input placeholder="Recherchez ici" type="text" className="outline-none text-[16px] bg-transparent w-full text-white font-normal px-4" />
    </div>
  );
}

export default Input;
