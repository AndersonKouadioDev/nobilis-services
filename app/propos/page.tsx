import Role from '@/components/propos/role/role';
import Hero from '../../components/propos/hero/hero';
import Services from '../../components/propos/services/services';
import Work from '@/components/propos/work/work';
import Team from '../../components/propos/team/team';
import BeforeFooter from '@/components/home/beforefooter/beforefooter';


export default function Propos(){
    return(
        <div>
            <Hero/>
            <Role/>
            <Services/>
            <Work/>
            <Team/>
            <BeforeFooter/>
        </div>
    );
}