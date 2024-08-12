/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

import { Cta, CtaProps } from '../Cta/Cta'

export type MainHero = {
  heading: string
  body?: string
  heroImage: any
  heroImageAlt: string
  cta?: CtaProps
}

export type Props = MainHero

export const MainHero = ({
  heading,
  body,
  heroImage,
  heroImageAlt,
  cta,
}: Props) => {
  return (
    <div className='bg-[#f0f8ed] py-10 pt-20 px-20'>
       <div className='text-center max-4xl mx-auto md:text-left space-y-8'>
          <h2 className='text-[40px]'>
            {heading}
          </h2>
          <h4 className='max-w-7xl text-[30px]'>
            {body}
          </h4>
        </div>
        <div className='w-full mt-12'>
          {heroImage && (
            <div>
              <ImageBox
                image={heroImage}
                alt={heroImageAlt}
                className='md:w-full md:h-full '
              />
            </div>
          )}
      </div>
      </div>
  )
}
