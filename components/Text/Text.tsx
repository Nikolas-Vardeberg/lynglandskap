import * as React from 'react'


export type Text = {
  body: string
  heading: string;
  isDark: boolean;
}

export type Props = Text

export const Text = ({ heading, body, isDark }: Props) => {
  return (
    <div className={isDark ? 'bg-green-tan' : 'bg-green-primary'}>
      <div className={`max-w-8xl px-8 md:px-20 ${isDark ? "py-8 md:py-16" : "py-2 md:py-8"}`}>
        <div className="relative">
        {heading && (
            <div className='relative text-left text-small md:text-medium leading-normal mb-5 text-black'>
                {heading}
            </div>
        )}
        {body && (
             <div
             className="relative text-left text-extra-small md:text-small leading-normal text-black"
            >
                {body}
            </div>
        )}
        </div>
      </div>
    </div>
  )
}
