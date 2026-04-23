"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView()
  }

  return (
    <header className="py-10 text-[18px]">
      <nav className="flex flex-row justify-between">
        <Link href="/" className="font-bold tracking-widest uppercase hover:text-white">
          Danny Emma
        </Link>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden flex-row gap-6 md:flex">
          <li className="cursor-pointer hover:text-white">
            <Link onClick={() => handleClick("work-experience")} href="/#work-experience">
              Expérience Pro.
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white">
            <Link onClick={() => handleClick("projects")} href="/#projects">
              Projets
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white">
            <Link onClick={() => handleClick("contact")} href="/#contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* ---------- MOBILE MENU ---------- */}
        {/* -- Trigger -- */}
        <button className="cursor-pointer md:hidden" type="button" onClick={() => setShowMobileMenu(true)}>
          <Image src="/icons/menu.svg" width={22} height={22} alt="Menu Icon" />
        </button>

        {/* -- Menu -- */}
        <div
          className={`transition-left fixed top-0 z-100 h-screen w-screen bg-[#0c0f11] p-6 duration-250 md:hidden ${showMobileMenu ? "left-0" : "-left-[100vw]"}`}
        >
          <button type="button" className="absolute top-10 right-6 cursor-pointer" onClick={() => setShowMobileMenu(false)}>
            <Image src="/icons/cross.svg" width={30} height={30} alt="Cross Icon" />
          </button>

          <ul className="mt-40 flex flex-col items-center justify-center gap-5 text-3xl font-semibold">
            <li className="hover:text-white">
              <Link
                onClick={() => {
                  handleClick("work-experience")
                  setShowMobileMenu(false)
                }}
                href="/#work-experience"
              >
                Expérience Pro.
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                onClick={() => {
                  handleClick("projects")
                  setShowMobileMenu(false)
                }}
                href="/#projects"
              >
                Projets
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                onClick={() => {
                  handleClick("contact")
                  setShowMobileMenu(false)
                }}
                href="/#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
