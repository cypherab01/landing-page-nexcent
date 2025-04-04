import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/contents/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: site.name,
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
