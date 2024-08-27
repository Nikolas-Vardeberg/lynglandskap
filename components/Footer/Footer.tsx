import Link from 'next/link'
import * as React from 'react'


import { FacebookIcon, InstagramIcon } from 'lucide-react';

import { CopyrightIcon } from 'lucide-react'

export type FooterProps = {
  copyright: string
}


export type Props = FooterProps

export const Footer = ({ copyright }: Props) => {
  return (
    <footer>
      <Link href="https://vertio.no">
        <p>&copy; {new Date().getFullYear()} {copyright}</p>
      </Link>
    </footer>
  )
}

export default Footer