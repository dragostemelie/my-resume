import { Metadata } from 'next';
import './globals.css';
import './keyframes.css';

export const metadata: Metadata = {
  title: 'Dragos Temelie',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
