/* eslint-disable @next/next/no-img-element */
import ImageBox from 'components/shared/ImageBox';
import * as React from 'react'

type FeaturedItemProps = {
  rowsImage: any
  rowsImageAlt: string
  name: string
  role: string
  email: string
}

export type Props = FeaturedItemProps

export const FeaturedItem = ({ rowsImage, rowsImageAlt, name, role, email }: Props) => {
  return (
    <div className=''>
      <section className="p-0">
        {rowsImage && (
           <ImageBox 
            alt={rowsImageAlt}
            image={rowsImage}
            className='md:w-full md:h-full object-cover'
          />
        )}
       <div className='space-y-2 mt-4'>
        <h2 className="text-black text-small">{name}</h2>
        {role && (
          <div className="text-black text-extra-small">{role}</div>
        )}
        {email && (
          <div className="text-black text-extra-small">{email}</div>
        )}
       </div>

      </section>
    </div>
  )
}
