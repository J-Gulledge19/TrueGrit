import Link from "next/link";

export default function NavBar(){
    const btnStyle = "bg-yellow-600 bg-opacity-40 border border-stone-900 rounded-md hover:bg-grit-weld p-1 pt-.5";
    return (
        <nav className="space-x-4 ml-10 mt-2 text-xl font-western text-grit-parchment">
            <Link className={`${btnStyle}`} href={"/"}>Home</Link>
            <Link className={`${btnStyle}`} href={"/about"}>About</Link>
            <Link className={`${btnStyle}`} href={"/store"}>Store</Link>
        </nav>
    )
}