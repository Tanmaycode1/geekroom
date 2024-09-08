import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "../styles/globals.css";
import { Metadata } from "next";

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
    // Color scheme detection and switching logic
    function setColorScheme() {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }

    // Set initial color scheme
    setColorScheme();

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(setColorScheme);

    // Cleanup function to remove the listener when the component unmounts
    return () => mediaQuery.removeListener(setColorScheme);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}