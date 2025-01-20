import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dineshn.fyi'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Dinesh MN',
    template: '%s | Dinesh MN',
  },
  description: 'Learning JavaScript and Python.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const theme = darkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (mode: boolean) => void }) {
  const links = [
    { name: '@DineshMN1', url: 'https://x.com/DineshMN17' },
    { name: 'Instagram', url: 'https://www.instagram.com/dinesh_mn.05' },
    { name: 'GitHub', url: 'https://github.com/DineshMN1' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dinesh-m-33350130a/' },
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
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}