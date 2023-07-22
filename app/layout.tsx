import Header from "@/components/Header";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Online Store",
  description: "Created For Front End Assignment",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
