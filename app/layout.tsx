import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "/../public/poppins-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MCK Medical Care",
    template: "%s | MCK Medical Care",
  },
  description:
    "Medicale Center : Votre partenaire santé. Découvrez nos spécialités, notre équipe médicale et nos ressources pour les patients. Nous offrons des soins de santé de qualité, adaptés à vos besoins. Votre santé, notre priorité.",
  openGraph: {
    images: "./opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
