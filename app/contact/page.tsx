import Hero from "@/components/contact/hero/hero";
import BeforeFooter from "@/components/home/beforefooter/beforefooter";
import Faq from '../../components/contact/faq/faq';


export default function Contact(){
    return(
        <div>
            <Hero/>
            <Faq/>
            <BeforeFooter/>
        </div>
    );
}