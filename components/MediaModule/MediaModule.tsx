import * as React from 'react'
import { Cta } from '../Cta/Cta'

import ImageBox from 'components/shared/ImageBox'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className={isDark ? 'bg-[#42A150]' : 'bg-[#ECFAEB]'}>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='flex flex-col justify-between h-full w-full text-center md:text-left py-12 px-12 md:py-20 md:container'>
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
                <h1 className={`text-[40px] ${isDark ? 'text-black': 'text-black'}`}>{heading}</h1>
                <h2 className="text-[30px] text-gray-500">{body}</h2>
                <Link href="/kontakt"  className={`group w-full relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md px-6 font-medium max-w-[400px] duration-500 ${isDark ? 'bg-white text-black' : 'bg-[#42A150] text-white'}`}><div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Kontakt Oss</div><div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></Link>  
              </div>
            </div>
            <div className='text-base md:text-left text-center md:text-base text-black'>
              &copy; {new Date().getFullYear()} Lyng Langskap AS. Laget av Vertio Webdesign
            </div>
        </div>
        <div className='h-full w-full'>
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
