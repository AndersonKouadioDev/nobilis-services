import { Client } from '@/components/home/parteners/client';
import Hero from '../components/home/hero/hero';
import Propos from '../components/home/propos/propos';
import Service from '../components/home/service/service';






export default function Home() {
  return (
    <div>
      <Hero/>
      <Client/>
      <Propos/>
      <Service/>
    </div>
  );
}

