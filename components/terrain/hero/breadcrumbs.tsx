import Link from "next/link";

export default function BreadcrumbNav() {
  return (
    <nav className="text-white font-extralight text-lg">
      <ul className="flex space-x-2">
        <li>
          <Link href="/services" className="text-white font-extralight hover:underline">
            Nos Services
          </Link>
        </li>
        <span>{">"}</span>
        <li>
          <Link href="/services/immobilier" className="text-white font-black hover:underline">
            Terrains
          </Link>
        </li>
      </ul>
    </nav>
  );
}