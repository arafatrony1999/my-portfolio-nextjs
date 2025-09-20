import { Dosis } from "next/font/google";
import "@/public/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/public/css/globals.css";
import "@/public/css/header.css";
import "@/public/css/homepage.css";
import "@/public/css/blog.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import formal from "@/public/images/formal.jpg"

export const metadata = {
  metadataBase: new URL("https://arafatrony.com"),
  title: {
    default: "Home - Arafat Rony",
    template: "%s | Home - Arafat Rony",
  },
  description:
    "Welcome to My Awesome Website — a platform where you’ll find amazing content, resources, and updates.",
  keywords: ["arafat", "arafat rony", "arafatrony", "rony", "sayeed arafat rony", "sayeed", "sayeed arafat"," web developer", "full stack developer", "front end developer", 'back end developer', "javascript", "react", "web development", "software engineer", "software development", "portfolio", "banker and web developer", "city bank", "arafat rony city bank", "arafat city bank", "rony city bank"],
  authors: [{ name: "Arafat Rony", url: "https://arafatrony.com" }],
  creator: "Arafat Rony",

  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arafatrony.com",
    siteName: "My Awesome Website",
    title: "My Awesome Website",
    description:
      "Hi, I’m Arafat Rony, — a full-time banker and a passionate part-time full-stack web developer. While I spend my days navigating the world of finance, I dedicate my off-hours to exploring my long-time hobby: building powerful, user-centric digital experiences. With expertise in both front-end and back-end technologies, I design, develop, and maintain everything from small tools to enterprise-level applications. My work spans a wide range of industries and platforms, including web banking systems, social projects, multivendor e-commerce, LMS platforms, affiliate blogs, startups, SaaS solutions, and web apps. Whether you're focused on long-term sustainability, performance, security, or impact, I’m here to collaborate and empower innovation—one line of code at a time.",
    images: [
      {
        url: "https://arafatrony.com/static/media/formal.c93d0f750540aeca86bb.jpg",
        width: 1200,
        height: 630,
        alt: "Home - Arafat Rony",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Home - Arafat Rony",
    description:
      "Hi, I’m Arafat Rony, — a full-time banker and a passionate part-time full-stack web developer. While I spend my days navigating the world of finance, I dedicate my off-hours to exploring my long-time hobby: building powerful, user-centric digital experiences. With expertise in both front-end and back-end technologies, I design, develop, and maintain everything from small tools to enterprise-level applications. My work spans a wide range of industries and platforms, including web banking systems, social projects, multivendor e-commerce, LMS platforms, affiliate blogs, startups, SaaS solutions, and web apps. Whether you're focused on long-term sustainability, performance, security, or impact, I’m here to collaborate and empower innovation—one line of code at a time.",
    images: ["https://arafatrony.com/static/media/formal.c93d0f750540aeca86bb.jpg"],
  },

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://arafatrony.com",
  },
};

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} antialiased`} >
        <ToastContainer />
        <Header />


        {children}



        <Footer />
      </body>
    </html>
  );
}
