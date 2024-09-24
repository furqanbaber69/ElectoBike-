import "./globals.css";
import { Poppins, Lexend_Deca } from "next/font/google";
import Layout from "./component/layout/layout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const lexendDeca = Lexend_Deca({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: "We Serve the best",
  description: "Test Your Ride Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${lexendDeca.variable}`}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
