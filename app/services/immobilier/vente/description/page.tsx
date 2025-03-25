import Hero from '@/components/description/hero/hero';
import BeforeFooter from '../../../../../components/home/beforefooter/beforefooter';
import PropertyDetails from '../../../../../components/description/property/property';
import RealEstateListing from '../../../../../components/description/featured/real-estate-listing';
import NearbySection from '../../../../../components/description/contact/nearby-section';


export default function Description(){
    return(
        <div>
            <Hero/>
            <PropertyDetails/>
            <RealEstateListing/>
            <NearbySection/>
            <BeforeFooter/>
        </div>
    );
}