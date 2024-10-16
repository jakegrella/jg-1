import Footer from '@/components/Footer'
import Header from '@/components/Header'
import projectInfo from '@/projectInfo'
import { cn } from '@/utils/cn'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: projectInfo.company.name,
  description: projectInfo.company.description,
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const FrontendLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={cn(inter.className, 'h-full w-full bg-black text-white px-2 py-8')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default FrontendLayout
