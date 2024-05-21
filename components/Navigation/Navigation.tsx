import Link from 'next/link'
import * as React from 'react'

import { NavLogo } from './NavLogo'

import cx from "classnames"
import { Menu } from 'lucide-react';
import { useWindScreenowSize } from 'hooks/useWindowSize';


type MenuItem = {
  label: string
  url: string
  _key: string
}

export type NavigationProps = {
  menu: MenuItem[]
}

export type Props = NavigationProps

export const Navigation = ({ menu }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => {
      setShowMenu((prev) => !prev);
  }

  const size = useWindScreenowSize();

  React.useEffect(() => {
    if (size.width > 640) {
      setShowMenu(false);
    }
  }, [size.width])

  return (
    <header className='fixed bg-white z-30 w-full py-6 border-b transition-all'>
      <div className='container flex justify-between'>
        <div className='flex items-center gap-10'>
          <Link href="/" className={cx("z-10 font-bold text-xl", showMenu === true ? "text-white" : "text-black")}>
            Logo
          </Link>

          <nav className={cx("flex gap-8 list-none bg-secondary-950 sm:relative sm:translate-y-0 sm:h-fit sm:w-fit absolute h-screen w-screen right-0 top-0 text-black flex-col items-center transition-all justify-center sm:flex-row",
            showMenu === true ? "translate-y-0 bg-black text-white": "-translate-y-full"
          )}>
            {menu.map((item) => {
              return (
                <li key={item._key}>
                  <Link
                    className="capitalize"
                    href={item.url}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </nav>
        </div>

        <div className='flex z-10 space-x-4'>
          <button onClick={toggleMenu} className={cx("p-3 sm:hidden flex items-center justify-center border rounded-full ", showMenu === true ? "text-white" : "text-black")}><Menu /></button>
          <button className={cx("border py-3 px-5 rounded-full duration-300", showMenu === true ? "text-white hover:bg-white hover:text-black" : "text-black hover:bg-black hover:text-white ")}>Get in Touch</button>
        </div>

      </div>
    </header>
  )
}
