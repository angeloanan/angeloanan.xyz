import { Link, ListItem, ListItemProps } from '@chakra-ui/react'

import NextLink from 'next/link'
import React from 'react'

interface ListItemWithLinkProps extends ListItemProps {
  url: string
}

export const ListItemWithLink: React.FC<ListItemWithLinkProps> = ({
  url,
  children
}) => {
  return (
    <ListItem>
      <NextLink href={url} passHref>
        <Link>{children}</Link>
      </NextLink>
    </ListItem>
  )
}
