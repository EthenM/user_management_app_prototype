import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./_authorization/auth-context";

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
  title: "Taekwondoon User Management System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`font-sans antialiased bg-gray-100 text-black`}
            >
                <AuthProvider>
                    { children }
                </AuthProvider>
            </body>
        </html>
    );
}
