import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Manoj Verma — Java Developer',
  description: 'Portfolio of Manoj Verma, a passionate Java Developer with expertise in OOP, multithreading, and full-stack development.',
  keywords: ['Java Developer', 'Manoj Verma', 'Portfolio', 'Software Engineer', 'Mumbai'],
  authors: [{ name: 'Manoj Verma' }],
  openGraph: {
    title: 'Manoj Verma — Java Developer',
    description: 'Building robust and scalable applications with Java, SQL, and modern web technologies.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
