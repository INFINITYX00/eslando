import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Digital Product Passport",
  description: "Discover more about your clothing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Suspense>
      <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
