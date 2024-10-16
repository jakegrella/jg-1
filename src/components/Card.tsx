import { cn } from '@/utils/cn'
import Link from 'next/link'

type Props = React.ComponentProps<'div'> & {
  href?: string
  title: string
  subtitle: string
}

const Card: React.FC<Props> = (props) => {
  const cardClassName = cn('bg-zinc-900 rounded-md p-2 block hover:bg-zinc-800', props.className)

  const Wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    if (!props.href) return <div className={cardClassName}>{children}</div>
    else if (props.href[0] === '/')
      return (
        <Link href={props.href} className={cardClassName}>
          {children}
        </Link>
      )
    else
      return (
        <a href={props.href} className={cardClassName}>
          {children}
        </a>
      )
  }

  return (
    <Wrapper>
      <h3 className="text-lime-400">{props.title}</h3>
      <h4>{props.subtitle}</h4>
      {props.children}
    </Wrapper>
  )
}

export default Card
