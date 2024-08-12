import { FeaturedItem } from 'components/FeaturedItem';
import * as React from 'react'


type Blocks = {
    rowsImage: any;
    rowsImageAlt: string;
    name: string;
    role: string;
    email: string;
}

export type Rows = {
  body: string
  heading: string;
  blocks: Blocks[]
}

export type Props = Rows

export const Rows = ({ heading, body, blocks }: Props) => {
  return (
    <div className='bg-[#D1FFCE] py-10 pt-20 px-8 md:px-20'>
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
     <div className='text-black grid grid-cols-1 md:grid-cols-2 justify-between gap-16 mt-6'>
     {blocks?.map((block, i) => {
            return (
              <FeaturedItem
                key={block.name + i}
                rowsImage={block.rowsImage}
                rowsImageAlt={block.rowsImageAlt}
                name={block.name}
                email={block.email}
                role={block.role}
              />
            )
          })}
     </div>
   </div>
  )
}
