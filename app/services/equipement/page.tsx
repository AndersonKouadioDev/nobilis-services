import Hero from "@/components/services/hero/hero";
import ServicesHeader from '../../../components/services/serviceheader/serviceheader';
import FaqEquipement from '../../../components/equipement/accordion/accordion';
import NobilisEquipement from '../../../components/equipement/servicebody/servicebody';


export default function Equipement(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <NobilisEquipement/>
            <FaqEquipement/>
        </div>
    );
}