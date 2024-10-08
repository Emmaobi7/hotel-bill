// src/app/layout.js

import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import './style/atd.css';
import './style/dash.css';
import './style/styles.css';
import './style/bill.css';
import Header from './Header'; // Import your Header component
import Sidebar from './SideBar'; // Import your Sidebar component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Hotel Billing System',
  description: 'Manage hotel billing and employee information',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className="dashboard">
            <Header />  {/* Render the Header */}
            <Sidebar /> {/* Render the Sidebar */}
            <main>{children}</main> {/* This is where the specific page content will be rendered */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
