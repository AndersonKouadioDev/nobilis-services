import Hero from '@/components/location/hero/hero';
import BeforeFooter from '../../../../components/home/beforefooter/beforefooter';
import ServicesHeader from '../../../../components/location/serviceheader/serviceheader';
import LocationBody from '../../../../components/location/body/body';


export default function Location(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <LocationBody/>
            <BeforeFooter/>
        </div>
    )
}