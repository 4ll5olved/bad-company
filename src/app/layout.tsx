import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import type { Metadata } from "next";
import { Playfair_Display} from "next/font/google";
import "./globals.css";
import TopBar from './components/top/topBar';
import Header from './components/header/header';

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700","800","900"],
});


export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "Restaurant Website next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} antialiased`}
      >
        <TopBar />
        <Header />
        {children}
      </body>
      <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
      crossOrigin="anonymous"></script>
    </html>
  );
}
