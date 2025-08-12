import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Meu Primeiro Projeto",
  description: "Descricao do porjeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
