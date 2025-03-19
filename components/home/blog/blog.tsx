import Image from 'next/image';


export default function Blog(){

    type News = {
        title: string;
        substitle: string;
        description: string;
        profil: string;
        image: string;
        num: string;
        month: string;
      };

      const news: News[] = [
        {
          title: 'Kristin Watson',
          substitle: 'President de Clean Service',
          description:
            'Comment maintenir une cuisine impeccable',
          profil: '/assets/images/illustrations/page-accueil/profil1.png',
          image: '/assets/images/illustrations/page-accueil/card_1.png',
          num: '22',
          month: 'AVR',
        },
        {
          title: 'Ralph Edwards',
          substitle: 'President de Clean Service',
          description:
            "Les secrets d'un bureau toujours propre",
          profil: '/assets/images/illustrations/page-accueil/profil2.png',
          image: '/assets/images/illustrations/page-accueil/card_2.png',
          num: '16',
          month: 'JUI',
        },
        {
          title: 'Albert Flores',
          substitle: 'President de Clean Service',
          description:
            'Nettoyage écologique : nos astuces',
          profil: '/assets/images/illustrations/page-accueil/profil3.png',
          image: '/assets/images/illustrations/page-accueil/card_3.png',
          num: '31',
          month: 'DEC',
        },
        {
          title: 'Jacob Jones',
          substitle: 'President de Clean Service',
          description:
            'Nettoyage écologique : nos astuces',
          profil: '/assets/images/illustrations/page-accueil/profil4.png',
          image: '/assets/images/illustrations/page-accueil/card_4.png',
          num: '18',
          month: 'MAI',
        },
        
      ]

    return (
        <div className="bg-white p-10">
            <div className="flex flex-col gap-6 py-20 items-center">
                <div className="text-primary text-lg font-bold">DERNIÈRES NOUVELLES</div>
                <div className="text-primary-600 text-2xl font-black">LISEZ NOTRE DERNIER BLOG</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                  {news.map((item) => (
                    <div key={item.title} className="flex flex-col gap-4 font-worksans border-2 rounded-lg h-full">
                      <div className="relative">
                        <Image
                          className="w-full h-auto object-cover aspect-[16/9]"
                          src={item.image}
                          alt={item.title}
                          width={200}
                          height={150}
                          priority
                        />
                        <div className="absolute right-4 -bottom-8 flex flex-col gap-1 text-white bg-black p-2 rounded-lg items-center w-16">
                          <div>{item.num}</div>
                          <div>{item.month}</div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 items-center px-4">
                        <Image
                          className="w-10 h-10 object-contain"
                          src={item.profil}
                          alt={item.title}
                          width={30}
                          height={30}
                          priority
                        />
                        <div className="flex flex-col">
                          <div>{item.title}</div>
                          <div className="text-gray-500">{item.substitle}</div>
                        </div>
                      </div>
                      <div className="text-gray-500 p-6 text-start">{item.description}</div>
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
}