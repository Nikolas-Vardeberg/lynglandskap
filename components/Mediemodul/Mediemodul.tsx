import ImageBox from 'components/shared/ImageBox';
import Link from 'next/link';
import * as React from 'react'

type Cards = {
    hasDarkBackground: boolean;
    imageOnRight: boolean;
    image: any;
    imageAlt: string;
    heading: string;
    body: string;
}

export type Mediemodul = {
    heading: string;
    body: string;
    cards: Cards[];
}

export type Props = Mediemodul

export const Mediemodul = ({ heading, body, cards }: Props) => {
  return (
    <div className='bg-[#D1FFCE] py-10 pt-20 px-8 md:px-20'>
        <div className='max-4xl mx-auto space-y-8'>
        {heading && (
            <h1 className='text-[30px] md:text-[40px] text-black'>
            {heading}
            </h1>
        )}
        {body && (
        <h4 className='max-w-7xl text-left text-black text-[20px] md:text-[30px]'>
            {body}
        </h4>
        )}
        </div>
        {cards?.map((card, i) => {
            return(
                <div key={i} className={`${card.hasDarkBackground? "bg-[#42A150]" : "bg-white"} grid grid-cols-1 md:grid-cols-2 mt-6`}>
                    <div
                        className={`relative mx-auto h-[300px] md:h-[500px] w-full self-start md:mt-0 ${
                        card.imageOnRight ? 'order-last mt-8' : ''
                        }`}
                    >
                        <ImageBox
                            width={500}
                            height={500}
                            image={card.image}
                            alt={card.imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className=" py-10 flex flex-col justify-center px-20">
                        {heading && (
                        <h2
                            className={`text-small md:text-large ${
                            card.hasDarkBackground ? 'text-white' : 'text-black'
                            }`}
                        >
                            {card.heading}
                        </h2>
                        )}
                        {body && (
                        <Link
                            href="/kontakt"
                            className={`mt-6 text-base ${
                            card.hasDarkBackground ? 'text-white' : 'text-black'
                            }`}
                        >
                            {card.body}
                        </Link>
                        )}
                    </div>
                </div>
            )
        })}
   </div>
  )
}
