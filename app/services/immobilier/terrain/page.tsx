import BeforeFooter from "@/components/home/beforefooter/beforefooter";
import Hero from "@/components/terrain/hero/hero";
import ServicesHeader from "@/components/terrain/serviceheader/serviceheader";
import TerrainBody from '../../../../components/terrain/body/body';


export default function Terrain(){
    return(
        <div>
            <Hero/>
            <ServicesHeader/>
            <TerrainBody/>
            <BeforeFooter/>
        </div>
    )
}