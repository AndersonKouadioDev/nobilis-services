import { Button } from '@nextui-org/react';
import Image from 'next/image';


export default function Blog(){

    type News = {
        description: string;
        image: string;
        num: string;
      };

      const news: News[] = [
        {
          description:
            'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
          image: '/assets/images/illustrations/page-accueil/image.png',
          num: '10.03.2024',
        },
        {
          description:
            "Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor",
          image: '/assets/images/illustrations/page-accueil/image-1.png',
          num: '10.03.2025',
        },
        {
          description:
            'Lorem ipsum dolor sit amecon sectetur adipisicing elit, sed do eiusmod tempor',
          image: '/assets/images/illustrations/page-accueil/div.service-img-2.png',
          num: '10.03.2026',
        },
        
      ]

    return (
        <div className="bg-[#E6EEF5] p-10">
            <div className="flex flex-col gap-6 py-10 md:py-20 items-center">
                <div className="text-primary text-2xl font-extrabold">Blog</div>
                <div className="text-center text-muted font-semibold">Nous sommes passionner de travailler avec vous</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                  {news.map((item) => (
                    <div key={item.num} className="flex flex-col gap-4 font-worksans border-2 rounded-2xl bg-white h-full">
                      <div className="relative">
                        <Image
                          className="w-full h-auto object-cover object-center aspect-[16/9] rounded-t-2xl"
                          src={item.image}
                          alt={item.num}
                          width={200}
                          height={150}
                          priority
                        />
                        <div className="absolute left-4 -bottom-8 flex flex-col gap-1 text-white bg-primary px-8 py-2 rounded-lg items-center w-24">
                          <div>{item.num}</div>
                        </div>
                      </div>
                      
                      <div className="text-black p-6 text-start">{item.description}</div>
                    </div>
                  ))}
                </div>
                <Button className="bg-muted text-white" radius='full'>Voir plus d&apos;article</Button>
            </div>
        </div>
    )
}