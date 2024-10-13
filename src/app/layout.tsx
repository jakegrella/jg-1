import projectInfo from '@/projectInfo';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: projectInfo.company.name,
  description: projectInfo.company.description,
};

const RootLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang='en' className={inter.className}>
        <body className='bg-black text-white mx-2 my-8'>{children}</body>
    </html>
  );
}

export default RootLayout
