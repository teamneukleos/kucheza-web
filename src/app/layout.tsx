import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SmoothScroll from "./components/smoothscroll";
import { ContactDialogProvider } from "./contact/contact-dialog";
import MouseTrail from "./components/mousetrails";

// TitlingGothicFB — normal/wide cut (Thin, Light, Regular)
const titlingGothic = localFont({
  src: [
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBNormal-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBNormal-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBNormal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-titling-gothic",
  display: "swap",
});

// TitlingGothicFB Comp — condensed cut (Thin, Light, Regular, Medium, Bold, Black)
const titlingGothicComp = localFont({
  src: [
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-titling-gothic-comp",
  display: "swap",
});

// TitlingGothicFB Comp Standard — single weight
const titlingGothicCompStandard = localFont({
  src: [
    {
      path: "../../public/fonts/titling-gothic/TitlingGothicFBComp-Standard.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-titling-gothic-comp-standard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kucheza Gaming",
  description: "Kucheza Gaming — game development studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${titlingGothic.variable} ${titlingGothicComp.variable} ${titlingGothicCompStandard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MouseTrail />
        <ContactDialogProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ContactDialogProvider>

      </body>
    </html>
  );
}