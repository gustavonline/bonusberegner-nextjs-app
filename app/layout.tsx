import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Announcebar from "@/components/announcebar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "2024 Bonusberegner | Bedste Sports Betting Bonusser",
  description: "Danmarks Bookmakers. Vi sammenligner de største sider. Opret dig gennem os og få flere tusinde kroner i velkomstbonus.",
  lang: "da",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#C8102E", // Change to your theme color
  keywords: "betting, bonusser, velkomstbonus, bedste betting sider, bonusberegner, sports betting, odds, odds bonus",
  author: "Bonusberegner",
  openGraph: {
    title: "2024 Bonusberegner | Bedste Sports Betting Bonusser",
    description: "Danmarks Bookmakers. Vi sammenligner de største sider. Opret dig gennem os og få flere tusinde kroner i velkomstbonus.",
    url: "https://www.bonusberegner.dk",
    type: "website",
    images: [
      {
        url: "https://www.bonusberegner.dk/BonusBeregnerLogo.png", // Replace with your actual image URL
        width: 800,
        height: 600,
        alt: "Danmarks Bedste Sports Betting Bonusser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bonusberegner", // Replace with your actual Twitter handle
    title: "2024 Bonusberegner | Bedste Sports Betting Bonusser",
    description: "Danmarks Bookmakers. Vi sammenligner de største sider. Opret dig gennem os og få flere tusinde kroner i velkomstbonus.",
    image: "https://www.bonusberegner.dk/BonusBeregnerLogo.png", // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={metadata.lang}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content={metadata.themeColor} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={inter.className}>
        <Announcebar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
