import * as React from 'react'

export type Rows = {
  body: string
  heading: string;
}

export type Props = Rows

export const Rows = ({ heading, body }: Props) => {
  return (
    <div className='bg-[#f0f8ed] py-10 pt-20 px-8 md:px-20'>
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
   </div>
  )
}
