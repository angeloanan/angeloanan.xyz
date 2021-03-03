import * as React from 'react'

import { Link, LinkProps } from '@chakra-ui/react'
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
      <Link fontWeight={500} color='yellow.200' {...rest}></Link>
    </NextLink>
  )
}
