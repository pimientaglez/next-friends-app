"use client"

import { Inter } from "next/font/google";
import Link from 'next/link';
import {usePathname} from "next/navigation";
import "./globals.css";

const navLinks = [
  {name: "Profile", href: "/profile"},
  {name: "Posts", href: "/posts"},
];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);
            return <Link 
                    href={link.href} 
                    key={link.name}
                    className={isActive? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
        })}
        {children}
      </body>
    </html>
  );
}
