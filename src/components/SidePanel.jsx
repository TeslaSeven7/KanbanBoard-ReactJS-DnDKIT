import React from 'react'
import HomeIcon from '../assets/icons//HomeIcon'

import GroupIcon from '../assets/icons/GroupIcon'
import GearIcon from '../assets/icons/GearIcon'
import InfoIcon from '../assets/icons/InfoIcon'
import ChevronDownIcon from '../assets/icons/ChevronDownIcon'
import PlusIcon from '../assets/icons/PlusIcon'
export default function SidePanel() {
  return (
    <div className="h-screen min-w-[300px] max-w-[300px] border-e-[1.5px] border-zinc-300 bg-white">
      <div className=" flex h-[80px] max-h-[80px] items-center border-b-[1.5px] border-zinc-300 ps-5">
        <h1 className="text-3xl font-bold text-blue-500">
          <a href="#">KANBVN.CO</a>
        </h1>
      </div>
      <div className="flex h-[80px] items-center justify-start border-b-[1.5px] border-zinc-300 px-5">
        <a
          href="#"
          className=" flex h-10 w-11 items-center justify-center rounded-md border border-zinc-300 bg-white p-2"
        >
          <HomeIcon
            color={'currentColor'}
            width={'h-5'}
            height={'h-5 stroke-zinc-300'}
            stroke={1.5}
          />
        </a>
        <a
          href="#"
          className="ms-2 flex h-10 w-11 items-center justify-center rounded-md border border-blue-600 bg-blue-50 p-2"
        >
          <GroupIcon
            color={'currentColor'}
            width={'h-5'}
            height={'h-5 stroke-blue-600'}
            stroke={1.5}
          />
        </a>
        <a
          href="#"
          className="ms-2 flex h-10 w-11 items-center justify-center rounded-md border border-zinc-300 bg-white p-2"
        >
          <GearIcon
            color={'currentColor'}
            width={'h-5'}
            height={'h-5 stroke-zinc-300'}
            stroke={1.5}
          />
        </a>
        <a
          href="#"
          className="ms-2 flex h-10 w-11 items-center justify-center rounded-md border border-zinc-300 bg-white p-2"
        >
          <InfoIcon
            color={'currentColor'}
            width={'h-5'}
            height={'h-5 stroke-zinc-300'}
            stroke={1.5}
          />
        </a>
      </div>
      <div className="flex items-center justify-start border-b-[1.5px] border-zinc-300 p-5">
        <div className="w-full">
          <a
            href="#"
            className="flex w-full items-center text-xs text-zinc-400"
          >
            <span className="me-2">
              <ChevronDownIcon
                color={'currentColor'}
                width={'w-3'}
                height={'h-3 stroke-zinc-500'}
                stroke={3}
              />
            </span>
            BOARDS
          </a>
          <ul className="mt-3">
            <li className="mb-3 rounded-md border border-blue-600 bg-blue-50 px-2 py-2">
              <a
                href="#"
                className=" text-md flex items-center justify-between text-blue-600"
              >
                <p className="m-0">
                  <span className="me-3">⌨️</span>Website development
                </p>
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-200 p-1 text-xs text-black opacity-0">
                  1
                </span>
              </a>
            </li>
            <li className="group mb-3 w-full rounded-md border border-white px-2 py-2 transition hover:border-blue-600">
              <a
                href="#"
                className="text-md flex w-full items-center justify-between transition group-hover:text-blue-500"
              >
                <p className="m-0">
                  <span className="me-3">🖥️</span>Website design
                </p>
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-200 p-1 text-xs text-black opacity-0">
                  2
                </span>
              </a>
            </li>
            <li className="group mb-3 rounded-md border border-white px-2 py-2 transition hover:border-blue-600">
              <a
                href="#"
                className="text-md flex items-center justify-between transition group-hover:text-blue-500"
              >
                <p className="m-0">
                  <span className="me-3">🧪</span>Testing
                </p>
                <span className="opacity-1 flex h-6 w-6 items-center justify-center rounded-md bg-zinc-200 p-1 text-xs text-black">
                  3
                </span>
              </a>
            </li>
            <li className="group mb-4 rounded-md border border-white px-2 py-2 transition hover:border-blue-600">
              <a
                href="#"
                className="text-md flex items-center justify-between transition group-hover:text-blue-500"
              >
                <p className="m-0">
                  <span className="me-3">🕵️</span>Quality Control
                </p>
                <span className="opacity-1 flex h-6 w-6 items-center justify-center rounded-md bg-zinc-200 p-1 text-xs text-black">
                  1
                </span>
              </a>
            </li>
          </ul>
          <a href="#" className="flex items-center text-sm text-zinc-400">
            <span className="me-2">
              <PlusIcon
                color={'currentColor'}
                width={'w-4'}
                height={'h-4 stroke-zinc-500'}
              />
            </span>
            Create New Board
          </a>
        </div>
      </div>
      <div className="flex items-center justify-start border-b-[1.5px] border-zinc-300 p-5">
        <div className="w-full">
          <a
            href="#"
            className="flex w-full items-center text-xs text-zinc-400"
          >
            <span className="me-2">
              <ChevronDownIcon
                color={'currentColor'}
                width={'w-3'}
                height={'h-3 stroke-zinc-500'}
                stroke={3}
              />
            </span>
            TEAM MEMBERS
          </a>
          <ul className="mb-5 mt-3">
            <li className="mb-3 flex cursor-pointer items-center justify-between rounded-md border  border-zinc-300 px-3 py-2">
              <div className="flex items-center">
                <div className="me-3 h-10 w-10 overflow-hidden rounded-full bg-pink-200">
                  <img
                    src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Chester&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,explaining,serious,smile,smileBig,smileLOL,smileTeethGap&head=afro,bangs,bangs2,bantuKnots,bear,buns,cornrows,cornrows2,dreads1,dreads2,flatTop,flatTopLong,grayBun,grayMedium,grayShort,hatBeanie,hatHip,hijab,long,longBangs,longCurly,medium1,medium2,medium3,mediumBangs,mediumBangs2,mediumBangs3,mediumStraight,mohawk,mohawk2,noHair1,noHair2,noHair3,pomp,shaved1,shaved2,shaved3,short1,short2,short3,short4,short5,turban,twists,twists2"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-0">Charles Redford</p>
                  <div className="flex items-center">
                    <span className="me-2 h-2 w-2 rounded-full bg-green-400"></span>
                    <p className="mb-0 text-xs text-zinc-400">Online</p>
                  </div>
                </div>
              </div>
              <ChevronDownIcon
                color={'currentColor'}
                width={'w-4'}
                height={'h-4 stroke-zinc-500'}
              />
            </li>

            <li className="mb-3 flex cursor-pointer items-center justify-between rounded-md border  border-zinc-300 px-3 py-2">
              <div className="flex items-center">
                <div className="me-3 h-10 w-10 overflow-hidden rounded-full bg-yellow-200">
                  <img
                    src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Max&face=awe,blank,calm,cute,eatingHappy,explaining,smile,smileBig,smileLOL,smileTeethGap,solemn,tired,driven"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-0">Charles Redford</p>
                  <div className="flex items-center">
                    <span className="me-2 h-2 w-2 rounded-full bg-green-400"></span>
                    <p className="mb-0 text-xs text-zinc-400">Online</p>
                  </div>
                </div>
              </div>
              <ChevronDownIcon
                color={'currentColor'}
                width={'w-4'}
                height={'h-4 stroke-zinc-500'}
              />
            </li>

            <li className="mb-3 flex cursor-pointer items-center justify-between rounded-md border  border-zinc-300 px-3 py-2">
              <div className="flex items-center">
                <div className="me-3 h-10 w-10 overflow-hidden rounded-full bg-green-200">
                  <img
                    src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Cuddles&face=awe,blank,calm,cute,eatingHappy,explaining,smile,smileBig,smileLOL,smileTeethGap,solemn,tired,driven"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="mb-0">Charles Redford</p>
                  <div className="flex items-center">
                    <span className="me-2 h-2 w-2 rounded-full bg-zinc-400"></span>
                    <p className="mb-0 text-xs text-zinc-400">Offline</p>
                  </div>
                </div>
              </div>
              <ChevronDownIcon
                color={'currentColor'}
                width={'w-4'}
                height={'h-4 stroke-zinc-500'}
              />
            </li>
          </ul>
          <a href="#" className="flex items-center text-sm text-zinc-400">
            <span className="me-2">
              <PlusIcon
                color={'currentColor'}
                width={'w-4'}
                height={'h-4 stroke-zinc-500'}
              />
            </span>
            Add Someone
          </a>
        </div>
      </div>
    </div>
  )
}
