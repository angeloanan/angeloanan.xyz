import * as React from 'react'

import type { LinkProps } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export const TextLink: React.FC<NextLinkProps & LinkProps> = ({
  href,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...rest
}) => {
  return (
    <NextLink
      href={href}
      passHref
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    >
      <Link fontWeight={500} color='accent.200' {...rest}></Link>
    </NextLink>
  )
}
