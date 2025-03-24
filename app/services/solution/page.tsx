import Hero from "@/components/services/hero/hero";
import ServicesHeader from "@/components/services/serviceheader/serviceheader";
import NobilisSolution from '../../../components/solution/servicebody/servicebody';
import FaqSolution from '../../../components/solution/accordion/accordion';
import BeforeFooter from '../../../components/home/beforefooter/beforefooter';


export default function Solution(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <NobilisSolution/>
            <FaqSolution/>
            <BeforeFooter/>
        </div>
    );
}