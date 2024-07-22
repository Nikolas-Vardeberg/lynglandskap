import Link from 'next/link'
import * as React from 'react'


import { FacebookIcon, InstagramIcon } from 'lucide-react';

import { CopyrightIcon } from 'lucide-react'

type FooterLink = {
  label: string
  url: string
}

export type FooterProps = {
  image?: string
  imageAlt?: string
  copyright: string
  socialLinks: FooterLink[]
  privacyPolicy: FooterLink
}


export type Props = FooterProps

export const Footer = ({ copyright, socialLinks, privacyPolicy }: Props) => {

  console.log(socialLinks)
  return (
    <footer className="bg-white border-t  py-8 md:py-16">
      <div className="container mx-auto px-5 text-black">
        <div>
          <Link href={'/'} className='font-bold text-2xl'>
            Logo
          </Link>
        </div>
        <div className="flex flex-col-reverse gap-12 pt-12 md:flex-row md:items-center md:justify-between md:pt-8">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 ">
            <CopyrightIcon /> {copyright && <span>{copyright}</span>}
            {privacyPolicy && (
              <Link
                className="underline hover:no-underline"
                href={privacyPolicy.url}
              >
                {privacyPolicy.label}
              </Link>
            )}
          </div>
          {socialLinks && (
           <ul className="ml-0 flex flex-wrap gap-4 md:flex-row space-x-4">
           {socialLinks.map((link) => {
             let IconComponent;
             switch (link.label.toLowerCase()) {
               case 'facebook':
                 IconComponent = FacebookIcon;
                 break;
               case 'instagram':
                 IconComponent = InstagramIcon;
                 break;
               default:
                 return (
                   <li key={link.url}>
                     <Link
                       className="border-transparent font-semibold text-black "
                       href={link.url}
                     >
                       {link.label}
                     </Link>
                   </li>
                 );
             }
       
             return (
               <li key={link.url}>
                 <Link
                   className="font-semibold text-black  flex"
                   href={link.url}
                 >
                    <IconComponent size={24} />
                    {link.label}
                 </Link>
               </li>
             );
           })}
         </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer