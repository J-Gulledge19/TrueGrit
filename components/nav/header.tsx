import NavBar from "./navbar";

export default function Header () {
    return (
        <header className="relative h-30 w-full shadow-2xl">
            <div className="absolute flex justify-between inset-0 bg-[url(/images/siteimages/headerimg.jpg)] z-0"></div>
            <img src="/images/siteimages/wire.png" className="absolute  w-screen ml-5 pr-8 h-52 opacity-40"></img>
            <section className="relative flex justify-between z-10 p-1">
                <section className="flex flex-col justify-around p-4 w-full">
                    <div className="w-fit rounded-md bg-gradient-to-r from-black to-transparent pr-8">
                        <h1 className="ml-10 mt-2 text-6xl font-western text-grit-parchment uppercase">True Grit Welding</h1>
                        <h1 className="ml-10 text-3xl font-western text-grit-parchment">Built with Grit. Forged with Precision.</h1>
                        <p className="ml-10 text-lg text-grit-steel">Certified & Insured – Repair & Custom Fabrication</p>
                    </div>
                    <NavBar />
                </section>
                    <img className="w-48 hidden sm:block" src="/images/siteimages/TrueGrit.png" alt="logo" />
            </section>
        </header>
    )
}