import NavBar from "./navbar";

export default function Header () {
    return (
        <div className="h-full flex justify-between">
            <div className="">
                <NavBar />
            </div>
            <img className="w-48 flex-2" src="/images/portfolio/TrueGrit.png" alt="logo" />
        </div>
    )
}