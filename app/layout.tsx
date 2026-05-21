import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Multi Step Form Example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main className="size-full flex flex-col flex-1 items-center justify-start px-4 bg-blue-100 font-ubuntu dark:bg-blue-100 md:justify-center md:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
