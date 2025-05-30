import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dineshmn.fyi'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Dinesh MN',
    template: '%s | Dinesh MN'
  },
  description: 'Self-taught programmer. Blockchain developer. Optimist.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            <ViewTransition name="test">{children}</ViewTransition>
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: 'DineshMN1', url: 'https://x.com/DineshMN17' },
    { name: 'Instagram', url: 'https://www.instagram.com/dinesh_mn.05' },
    { name: 'GitHub', url: 'https://github.com/DineshMN1' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dinesh-mn/' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 hover:dark:text-gray-200 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
      <p className="mx-auto w-fit text-sm mt-2 -mb-2 text-gray-400 dark:text-gray-500 text-center">
        © {new Date().getFullYear()}  
        <Link 
          href="https://dineshmn.fyi" 
          className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-gray-200 transition-colors duration-200 ml-1"
        >
          Dinesh MN
        </Link>
      </p>
    </footer>
  );
}
