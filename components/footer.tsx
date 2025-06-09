export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full h-40 bg-grit-black text-grit-parchment border-t border-grit-steel py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-western uppercase mb-2">True Grit Welding</h2>
          <p className="text-sm">Certified • Insured • Veteran Owned</p>
          <p className="text-xs mt-2 text-grit-steel">© {new Date().getFullYear()} True Grit Welding</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-header uppercase text-grit-weld mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/store" className="hover:underline">Store</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-header uppercase text-grit-weld mb-2">Contact</h3>
          <p className="text-sm">📍 Elbert, CO</p>
          <p className="text-sm">📞 (719) 660-6034</p>
          <p className="text-sm">✉️ jgulledge19@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
