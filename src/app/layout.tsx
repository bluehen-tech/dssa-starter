import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My DSSA site',
  description: 'Built on the DSSA Builder Path.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <main className="flex-1">{children}</main>
        <footer className="bg-blue-primary text-white text-sm py-4 text-center">
          Built on the{' '}
          <a href="https://bluehen-dssa.org/learn" className="text-gold underline">
            DSSA Builder Path
          </a>
        </footer>
      </body>
    </html>
  );
}
