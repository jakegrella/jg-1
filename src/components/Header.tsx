'use client'

import projectInfo from '@/projectInfo'
import getLosAngelesTime from '@/utils/getLosAngelesTime'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    // get time on mount
    const time = getLosAngelesTime()
    setTime(time)

    // update time every ten seconds
    const intervalId = setInterval(() => {
      setTime(getLosAngelesTime())
    }, 10000)

    // clean up interval unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="flex flex-row justify-between items-center mb-8">
      <Link href="/">
        <h2 className="text-2xl font-bold">{projectInfo.company.name.toLowerCase()}</h2>
      </Link>
      <p className="max-w-48 text-[10px] leading-3">{`software engineer and web designer in los angeles, california [${time.toLowerCase()}]`}</p>
    </header>
  )
}

export default Header
