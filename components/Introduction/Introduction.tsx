import Image from "next/image"
import Link from "next/link"

export default function Introduction() {
  return (
    <div className="flex flex-col items-center gap-10 pt-16 md:flex-row">
      {/* -- Photo --  */}
      <div className="h-44 w-44 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 p-1">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image className="object-cover" src="/avatar.jpg" fill alt="Avatar" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* ---------- DESKTOP TITLE ---------- */}
        <h1 className="hidden text-center text-[28px] font-bold tracking-[0.8px] min-[500px]:block md:text-start">
          <span className="text-white">Salut, Moi c'est Danny.</span> Je suis
          <br />
          Développeur Full Stack.
          <span className="relative -top-1 left-1 rounded-2xl bg-[#16a34a33] px-3 py-1 text-[14px] font-bold tracking-[1px] text-nowrap text-[#16a34a]">
            <span className="mr-1.5 mb-[1px] inline-block h-2 w-2 rounded-2xl bg-[#16a34a]"></span>Open to work
          </span>
        </h1>

        {/* ---------- MOBILE TITLE ---------- */}
        <h1 className="text-center text-[28px] font-bold tracking-[0.8px] min-[500px]:hidden md:text-start">
          <span className="text-white">Salut, Moi c'est Danny.</span> Je suis Développeur Full Stack.
          <br />
          <span className="relative -top-1 left-1 rounded-2xl bg-[#16a34a33] px-3 py-1 text-[14px] font-bold tracking-[1px] text-nowrap text-[#16a34a]">
            <span className="mr-1.5 mb-[1px] inline-block h-2 w-2 rounded-2xl bg-[#16a34a]"></span>Open to work
          </span>
        </h1>

        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex items-center gap-1">
            <Image src="/icons/location.svg" height={20} width={20} alt="Location Icon" />
            <p>La Réunion, France.</p>
          </div>

          <div className="flex gap-5">
            <Link href="https://www.linkedin.com/in/danny-emma-015715162/" className="flex items-center gap-1" target="_blank">
              <Image src="/icons/linkedin.png" height={24} width={24} alt="LinkedIn Icon" />
              LinkedIn
            </Link>

            <Link href="https://github.com/DannyEmma" className="flex items-center gap-1" target="_blank">
              <Image src="/icons/github.svg" height={20} width={20} alt="GitHub Icon" />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
