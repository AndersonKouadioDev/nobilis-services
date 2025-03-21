import BeforeFooter from "@/components/home/beforefooter/beforefooter";
import Hero from "@/components/services/hero/hero";
import ServicesHeader from '../../components/services/serviceheader/serviceheader';


export default function Services(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <BeforeFooter/>
        </div>
    );
}