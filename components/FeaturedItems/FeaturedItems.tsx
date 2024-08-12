import * as React from 'react'
import { FeaturedItem } from '../FeaturedItem/FeaturedItem'

type Blocks = {
  name: string;
  role: string;
  email: string;
}

export type FeaturedItems = {
  heading: string
  blocks: Blocks[]
}

export type Props = FeaturedItems

export const FeaturedItems = ({ heading, blocks }: Props) => {
  return (
    <div className="bg-grey-100">
      <div className="container mx-auto pt-14 lg:pt-28">
        <h2 className="mx-auto px-5 pb-14 text-center font-times text-3xl font-bold text-primary-700 lg:w-8/12 lg:pb-16 lg:text-2xl">
          {heading}
        </h2>
      </div>
    </div>
  )
}
