import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "../styles/globals.css";
import { Metadata } from "next";
import ColorSchemeProvider from "./ColorSchemeProvider";

export const metadata: Metadata = {
  title: "Geek Room",
  description: "Welcome to GeekRoom",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ColorSchemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ColorSchemeProvider>
      </body>
    </html>
  );
}