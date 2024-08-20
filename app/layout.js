import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a coffee",
  description: "This website is a croud funding platform for your projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[79.2vh] bg-slate-950 relative items-center flex flex-col overflow-hidden">
          <div class="absolute bottom-0 left-[-10%] right-0 top-[-5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>  <div class="absolute bottom-0 left-[75%] right-0 top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
