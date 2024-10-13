import type { Metadata } from "next";
import { Inter ,IBM_Plex_Sans} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const ibm =IBM_Plex_Sans()
export const metadata: Metadata = {
  title: "Vasundhara",
  description: "A project to help sustain  Earth",
  icons:{icon:"logo.png"
        
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
