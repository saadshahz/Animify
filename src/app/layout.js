import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Animify",
  description: "Generate by Saad Shahzad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
