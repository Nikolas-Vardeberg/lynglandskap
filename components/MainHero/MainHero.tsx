/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox'
import * as React from 'react'

export type MainHero = {
  heading: string
  body?: string
  heroImage: any
  heroImageAlt: string
}

export type Props = MainHero

export const MainHero = ({
  heading,
  body,
  heroImage,
  heroImageAlt,
}: Props) => {
  return (
    <div className='bg-green-primary py-10 pt-20 px-8 md:px-20'>
       <div className='max-4xl mx-auto space-y-8'>
          {heading && (
            <h1 className='text-[30px] md:text-[40px] text-black'>
              {heading}
            </h1>
          )}
        {body && (
          <h4 className='max-w-7xl text-left text-black text-[20px]   md:text-[30px]'>
            {body}
          </h4>
        )}
        </div>
        {heroImage && (
          <div className='w-full mt-12 text-black'>
             <ImageBox
                image={heroImage}
                alt={heroImageAlt}
                className='md:w-full md:h-full'
              />
          </div>
        )}
      </div>
  )
}
