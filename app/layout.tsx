import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESSENTIAL.7500 — Sneakers & Running",
  description: "Sélection sneakers et running. Commande directement sur Snapchat."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body>{children}</body></html>;
}