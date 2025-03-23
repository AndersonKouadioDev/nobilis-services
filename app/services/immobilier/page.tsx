import FaqImmobilier from '../../../components/immobilier/accordion/accordion';
import BeforeFooter from '../../../components/home/beforefooter/beforefooter';
import NobilisImmobilier from '@/components/immobilier/servicebody/servicebody';
import Hero from '@/components/services/hero/hero';
import ServicesHeader from '@/components/services/serviceheader/serviceheader';


export default function Immobilier(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <NobilisImmobilier/>
            <FaqImmobilier/>
            <BeforeFooter/>
        </div>
    );
}