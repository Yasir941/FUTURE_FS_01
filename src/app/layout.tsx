import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio | Yasir Azam',
  description: 'Proactive student leader, computer science student, and creative developer.',
  icons: {
    icon: '/favicon.ico.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-[#0a0a0a] text-white antialiased`}>
        <div className="noise-overlay" />
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
