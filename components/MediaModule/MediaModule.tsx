import * as React from 'react'
import { Cta } from '../Cta/Cta'

import ImageBox from 'components/shared/ImageBox'
import Image from 'next/image'

export type MediaModule = {
  body?: string
  cta?: any
  heading: string
  imageAlt: string
  imageOnRight: boolean
  image: any
  isDark: boolean
}

export type Props = MediaModule

export const MediaModule = ({
  body,
  cta,
  heading,
  imageAlt = '',
  imageOnRight = false,
  image,
  isDark = false,
}: Props) => {
  return (
    <div className={isDark ? 'bg-green-600' : 'bg-[#EBF2FA]'}>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col justify-between h-screen w-full text-center md:text-left py-12 px-12 md:py-20 md:container'>
            <div>
              <div className='flex justify-center md:justify-start'>
                <Image
                  src="/logo.png"
                  alt="Lyng Langskap"
                  height={300}
                  width={300}
                  draggable={false}
              />
              </div>
              <div className='mt-28 space-y-8'>
                <h1 className='text-4xl text-black'>{heading}</h1>
                <h2 className='text-lg text-gray-500'>{body}</h2>
              </div>
            </div>
            <div className='text-base md:text-left text-center md:text-base text-gray-500'>
              &copy; {new Date().getFullYear()} Lyng Langskap AS. Laget av Vertio Webdesign
            </div>
        </div>
        <div className='h-screen w-full'>
          <ImageBox 
            alt={imageAlt}
            image={image}
            width={1000}
            height={1000}
            className='h-full w-full'
          />
        </div>
      </div>
    </div>
  )
}
