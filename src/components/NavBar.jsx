import React from 'react'
import SearchIcon from '../assets/icons/SearchIcon'
import GearIcon from '../assets/icons/GearIcon'
import BellIcon from '../assets/icons/BellIcon'
export default function NavBar() {
  return (
    <div className=" group flex max-h-[80px] min-h-[80px] items-center justify-between border-b-[1.5px] border-zinc-300 bg-white px-5 py-7   ">
      <div className="">
        <div className=" flex w-[400px] items-center rounded-md border border-zinc-300 bg-[#f7f7f7] px-3 py-2 hover:border-blue-500">
          <SearchIcon color={'black'} width={'h-4'} height={'w-4'} />
          <input
            className="text-md ms-2 w-full bg-transparent font-semibold transition focus:outline-none"
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center">
        <a href="#" className="relative me-5">
          <BellIcon color={'#78716c'} width={'w-6'} height={'h-6'} />
          <div className="absolute right-[1px] top-0 h-2 w-2 rounded-full border border-white bg-red-500"></div>
        </a>
        <a href="#" className="me-5">
          <GearIcon color={'#78716c'} width={'w-6'} height={'h-6'} />
        </a>
        <a href="" className="flex items-center">
          <div className="me-2 flex h-9 w-9 items-end justify-center overflow-hidden rounded-full border-2 border-white bg-pink-200">
            <img
              src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Cuddles&accessories[]&face=awe,blank,calm,cute,explaining,smile,smileBig,solemn,tired,driven,eatingHappy&head=afro,bangs,bangs2,bantuKnots,bear,buns,cornrows,cornrows2,dreads2,flatTop,flatTopLong,grayBun,grayMedium,grayShort,hatBeanie,hatHip,hijab,long,longAfro,longBangs,longCurly,medium1,medium2,medium3,mediumBangs,mediumBangs2,mediumBangs3,mediumStraight,mohawk,mohawk2,noHair1,noHair2,noHair3,pomp,shaved1,shaved2,shaved3,short1,short2,short3,short4,short5,turban,twists,twists2&mask[]"
              alt="avatar"
            />
          </div>
          <span className="font-semibold">Alex Somdey</span>
        </a>
      </div>
    </div>
  )
}
