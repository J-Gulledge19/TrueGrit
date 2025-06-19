import '../styles/globals.css';
import { Cinzel, Anton, Bebas_Neue } from 'next/font/google';
import Header from '../components/nav/header';
import Footer from '../components/footer';

const cinzel = Cinzel({ subsets: ['latin'], weight: '700' })
const anton = Anton({ subsets: ['latin'], weight: '400' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'True Grit Welding',
  description: 'Certified & Insured Welding - Repair & Custom Fabrication',
  icons: {
    icon: '/images/siteimages/TrueGrit.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.className} ${anton.className} ${bebas.className} bg-[url(/images/siteimages/diamondplate.png)]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
