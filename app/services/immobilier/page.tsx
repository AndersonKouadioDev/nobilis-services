import FaqImmobilier from '../../../components/immobilier/accordion/accordion';
import BeforeFooter from '../../../components/home/beforefooter/beforefooter';
import NobilisImmobilier from '@/components/immobilier/servicebody/servicebody';


export default function Immobilier(){
    return(
        <div>
            <NobilisImmobilier/>
            <FaqImmobilier/>
            <BeforeFooter/>
        </div>
    );
}