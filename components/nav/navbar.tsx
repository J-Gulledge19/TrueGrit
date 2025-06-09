import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="space-x-4 ml-10 text-xl font-western text-grit-parchment">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/store"}>Store</Link>
            
        </nav>
    )
}