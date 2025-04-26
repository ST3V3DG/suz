import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCK Travel Agency",
  description:
    "Medicale Center : Votre partenaire santé. Découvrez nos spécialités, notre équipe médicale et nos ressources pour les patients. Nous offrons des soins de santé de qualité, adaptés à vos besoins. Votre santé, notre priorité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`font-poppins antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
