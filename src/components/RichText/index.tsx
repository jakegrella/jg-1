// copied and edited from https://github.com/payloadcms/payload/blob/067d353cdd2869623a2361322625b685ff355f5e/templates/website/src/components/RichText/index.tsx

import React from 'react'
import { cn } from '@/utils/cn'
import { serializeLexical } from './serialize'

type Props = {
  className?: string
  content: Record<string, any>
  enableGutter?: boolean
  enableProse?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={cn(
        {
          'container ': enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose dark:prose-invert ': enableProse,
        },
        className,
      )}
    >
      {/* {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content?.root?.children })} */}
        {content && serializeLexical({ nodes: content?.root?.children })}
    </div>
  )
}

export default RichText