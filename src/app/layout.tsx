import type { Metadata } from "next"; // This line fixes your error
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configure fonts for a professional "Winning" look
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// These satisfy the "Meta Tags" requirement in the PDF
export const metadata: Metadata = {
  title: "Java Buzz | Premium Artisan Coffee & Roastery",
  description: "Experience the modern taste of Java Buzz. Award-winning coffee, dynamic blog, and online ordering in Metro City.",
  keywords: ["coffee shop", "Java Buzz", "online ordering", "specialty coffee", "metro city coffee", "DSL 2026"],
  authors: [{ name: "Your Name" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}