import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist, Geist_Mono, Manrope, Maven_Pro, Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


import { Providers } from "@/providers/providers";
// import Head from "@/components/home/navbar/navbar";
// import Footer from "@/components/home/footer/footer";

const Title = Maven_Pro (
  {
    variable: "--Title",
    subsets:["latin"],
    weight: ["400", "500", "600", "700", "800", "900"]
  }
);

const subtitle = Manrope (
  {
    variable: "--subtitle",
    subsets:["latin"],
    weight: ["400", "500", "600", "700", "800"]
  }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins (
  {
    variable: "--poppins",
    subsets: ["latin"],
    weight: ["500"]
  }
);

const worksans = Work_Sans({
  variable:"--font-worksans",
  subsets:["latin"],
  weight: ["400", "500", "600", "700"]
})

const bevietnampro = Be_Vietnam_Pro({
  variable:"--font-bevietnampro",
  subsets:["latin"],
  weight: ["400", "500", "600", "700", "800","900"]
})

const title = localFont({
   src: "../public/assets/fonts/balbeer/Balbeer-Rustic.ttf",
   variable: "--font-title", 
  });

export const metadata: Metadata = {
  title: "brin service clean",
  description: "Service Clean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${worksans.variable} ${bevietnampro.variable} ${title.variable} ${Title.variable} ${subtitle.variable} antialiased`}
      >
      <div className="font-bevietnampro max-w-screen-2xl mx-auto ">
        {/* <Head/> */}
          <Providers>{children}</Providers>
        {/* <Footer/> */}
      </div> 
      </body>
    </html>
  );
}


