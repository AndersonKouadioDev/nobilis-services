import { Button } from "@nextui-org/react";
import { BrickWall, MoveRight } from "lucide-react";
import Image from "next/image";


export default function Service(){

    type data = {
        picture : string;
        name: string;
        link: string;
    }

    const Data : data[] = [
        {
            picture:"/assets/images/illustrations/page-accueil/div.service-img.png",
            name: "NOBILIS IMMOBILIER",
            link:"/"
        },
        {
            picture:"/assets/images/illustrations/page-accueil/div.service-img-1.png",
            name: "NOBILIS SOLUTION",
            link:"/"
        },
        {
            picture:"/assets/images/illustrations/page-accueil/div.service-img-2.png",
            name: "NOBILIS EQUIPEMENT",
            link:"/"
        }
    ]

    return(
        <div className="px-6 py-16 my-8">
            <div className="flex flex-col gap-2 items-center justify-center mb-16">
                <div className="text-primary text-2xl font-extrabold">Nos Services</div>
                <div className="text-center text-muted font-semibold mx-auto md:mx-20">Nobilis Services vous accompagne dans trois domaines clés :  l’immobilier, les solutions professionnelles et l’équipement. Découvrez nos services adaptés à vos besoins.</div>
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-14 md:gap-4">
                {
                    Data.map((item)=>(
                        <div key={item.name} className="border-2 relative border-muted border-dashed rounded-b-3xl flex flex-col px-4 py-8 justify-between items-center">
                            <Image
                            src={item.picture}
                            height={220}
                            width={190}
                            alt={item.name}
                            className="rounded-2xl object-contain relative bottom-16 min-h-[15px]"
                            />
                            <BrickWall color="black" size={40} className="bg-gray-200 p-2 rounded-full"/>
                            <div className="font-bold pb-5">{item.name}</div>
                            <Button href={item.link} className="bg-black text-white rounded-t-full"><MoveRight/></Button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}