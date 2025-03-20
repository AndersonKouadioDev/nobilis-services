import { Client } from '@/components/home/parteners/client';
import Hero from '../components/home/hero/hero';
import Propos from '../components/home/propos/propos';
import Service from '../components/home/service/service';
import Blog from '../components/home/blog/blog';
import Galerie from '../components/home/galerie/galerie';
import Info from '../components/home/info/info';
import BeforeFooter from '../components/home/beforefooter/beforefooter';






export default function Home() {
  return (
    <div>
      <Hero/>
      <Client/>
      <Propos/>
      <Service/>
      <Blog/>
      <Galerie/>
      <Info/>
      <BeforeFooter/>
    </div>
  );
}

