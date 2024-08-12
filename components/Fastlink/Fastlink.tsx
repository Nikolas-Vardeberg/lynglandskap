import ImageBox from 'components/shared/ImageBox';
import Link from 'next/link';
import * as React from 'react'

type Links = {
    service: string;
    url: string;
}


export type Fastlink = {
  hasDarkBackground: boolean
  eyebrow: string;
  fastlinkImage: any;
  fastlinkImageAlt: string;
  blocks: Links[];
}

export type Props = Fastlink

export const Fastlink = ({ hasDarkBackground, eyebrow, fastlinkImage, fastlinkImageAlt, blocks}: Props) => {
  return (
    <div className={hasDarkBackground ? 'bg-[#42A150]' : 'bg-[#ECFAEB]'}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center items-center md:items-start py-12 px-12 lg:px-32 xl:px-52'>
                {eyebrow && (
                    <h4 className={`${hasDarkBackground ? "text-white" : "text-black"} text-extra-small sm:text-small`}>{eyebrow}</h4>
                )}
                {blocks?.map((block, i) => {
                    return(
                        <Link className={`${hasDarkBackground ? "text-white" : "text-black"} hover:scale-110 duration-100`} href={block.url} key={i}>
                            <h2 className='text-small sm:text-large'>{block.service}</h2>
                        </Link>
                    )
                })}
            </div>
            {fastlinkImage && (
                <div className='h-full'>
                    <ImageBox 
                        image={fastlinkImage}
                        alt={fastlinkImageAlt}
                        className='md:w-full md:h-full object-cover'
                    />
                </div>
            )}
        </div>
    </div>
  )
}
