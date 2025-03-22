import BeforeFooter from "@/components/home/beforefooter/beforefooter";
import Hero from "@/components/services/hero/hero";
import ServicesHeader from '../../components/services/serviceheader/serviceheader';
import ServicesBody from "@/components/services/servicebody/servicebody";


export default function Services(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <ServicesBody/>
            <BeforeFooter/>
        </div>
    );
}