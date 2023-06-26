import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home - Skyline Web Tech',
  description: 'A.I Skyline Web Tech Blog',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
        <Navbar />
       <main>
        {children}
       </main>
        <Footer />
        </body>
    </html>
  )
}
