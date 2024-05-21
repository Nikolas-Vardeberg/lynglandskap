import * as React from 'react'
import { Cta } from '../Cta/Cta'

import ImageBox from 'components/shared/ImageBox'

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
    <div className={isDark ? 'bg-green-600' : 'bg-white'}>
      <div className="container mx-auto py-48">
        <div className="grid xl:grid-cols-2 gap-12 md:gap-36">
          <div
            className={`relative mx-auto self-start w-full h-[450px] sm:h-[700px] bg-red-500 ${
              imageOnRight ? 'order-last mt-8' : ''
            }`}
          >
              <ImageBox
                width={420}
                height={520}
                image={image}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover transform"
              />
          </div>
          <div className="mt-10 flex flex-col justify-center md:mt-0">
            {heading && (
              <h2
                className={`font-sans text-features leading-none font-bold ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {heading}
              </h2>
            )}
            {body && (
              <div
                className={`prose mt-6 ${
                  isDark ? 'text-white/80' : 'text-black/80'
                }`}
              >
                {body}
              </div>
            )}
            {cta && cta.isEnabled && (
              <div className="pt-10">
                <Cta
                  url={cta.url}
                  text={cta.text}
                  hasPrimaryCta={cta.hasPrimaryCta}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
