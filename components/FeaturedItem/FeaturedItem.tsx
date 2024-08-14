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
      <div className="p-0">
        {rowsImage && (
          <div className="overflow-hidden w-full h-full">
            <ImageBox 
              alt={rowsImageAlt}
              image={rowsImage}
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-125"
            />
          </div>
        )}
       <div className='space-y-2 mt-4'>
        {name && (
          <h2 className="text-black text-small">{name}</h2>
        )}
        {role && (
          <div className="text-black text-extra-small">{role}</div>
        )}
        {email && (
          <div className="text-black text-extra-small">{email}</div>
        )}
       </div>
      </div>
    </div>
  )
}
