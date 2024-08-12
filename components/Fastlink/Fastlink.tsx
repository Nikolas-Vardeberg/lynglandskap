import * as React from 'react'

import { Cta } from '../Cta/Cta'
import { QuoteIcon } from '../QuoteIcon/QuoteIcon'

export type Fastlink = {
  body: string
  hasDarkBackground: boolean
  hasIcon: boolean;
  eyebrow: string;
}

export type Props = Fastlink

export const Fastlink = ({ hasDarkBackground, body, eyebrow}: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-[#42A150]' : 'bg-[#ECFAEB]'}>
      <div className="max-w-9xl px-8 py-24 sm:px-36 md:py-24">
        <h4 className='text-extra-small'>
            {eyebrow}
        </h4>
      </div>
    </div>
  )
}
