import OrderFormModalButton from "../components/CustomOrderButton";

export default function Home() {
  return (
    <main className="p-8">
      <section className="px-6 py-12 max-w-4xl mx-auto text-grit-parchment">
      <h1 className="text-4xl font-bold mb-4 text-center font-western text-grit-parchment">
        Welcome to True Grit Welding
      </h1>
      <h2 className="text-xl font-semibold text-center font-western text-grit-parchment mb-8">
        Licensed & Insured | Welding Repair & Custom Fabrication
      </h2>

      <p className="mb-6 text-lg font-western leading-relaxed">
        At <span className="font-semibold">True Grit Welding</span>, we bring
        precision, durability, and craftsmanship to every project. Whether you
        need welding repairs, or custom metal fabrication, we’ve got the skill and grit to get the job done
        right. With years of hands-on experience and a passion for quality
        work, we take pride in everything we do.
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-western font-semibold mb-2">We specialize in:</h3>
        <ul className="font-western list-disc list-inside space-y-1">
          <li>In-Shop Welding Repairs</li>
          <li>Custom Fabrication</li>
          <li>Heavy Equipment & Trailer Repairs</li>
          <li>Gates, Railings, Brackets, and More</li>
        </ul>
      </div>

      <p className="text-lg font-western leading-relaxed">
        From one-off custom builds to urgent repair jobs, we stand behind our
        work with integrity and a commitment to excellence. Let's weld your
        vision into reality.
      </p>

      <div className="mt-8 text-center">
        <OrderFormModalButton/>
        <p className="mt-2 text-sm text-gray-500 italic">No job too tough.</p>
      </div>
    </section>
    </main>
  );
}
