import { Lora } from 'next/font/google'

import "./globals.css";
import {ThemeProvider} from "../hooks/use-theme"
 
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Protfolio Gunjan",
  description: "Curious to know more about me?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`antialiased ${lora.className}`}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
