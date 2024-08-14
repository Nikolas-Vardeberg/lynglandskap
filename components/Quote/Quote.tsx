import * as React from 'react'

import { Cta } from '../Cta/Cta'
import { QuoteIcon } from '../QuoteIcon/QuoteIcon'

export type Quote = {
  body: string
  hasDarkBackground: boolean
  hasIcon: boolean
}

export type Props = Quote

export const Quote = ({ hasDarkBackground, body, }: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-green-dark' : 'bg-green-tan'}>
      <div className="max-w-9xl px-8 py-24 sm:px-36 md:py-24">
        <div className="relative">
          <div
            className={`relative text-left text-2xl md:text-[40px] leading-normal ${hasDarkBackground ? 'text-white' : 'text-black'}`}
          >
            &quot;{body}&quot;
          </div>
        </div>
      </div>
    </div>
  )
}
