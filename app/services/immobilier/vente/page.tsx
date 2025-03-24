import Hero from '@/components/vente/hero/hero';
import BeforeFooter from '../../../../components/home/beforefooter/beforefooter';
import ServicesHeader from '@/components/vente/serviceheader/serviceheader';
import VenteBody from '../../../../components/vente/body/body';


export default function Vente(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <VenteBody/>
            <BeforeFooter/>
        </div>
    )
}