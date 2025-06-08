import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="inline-block align-text-bottom h-full">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/store"}>Store</Link>
            
        </nav>
    )
}