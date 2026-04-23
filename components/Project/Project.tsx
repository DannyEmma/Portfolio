"use client"

import Image from "next/image"
import TeckLabel from "../TeckLabel/TeckLabel"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Teck } from "@/lib/types"

interface ProjectProps {
  name: string
  description: React.ReactElement
  tecks: Teck[]
  siteUrl: string
  gitRepoUrl: string
}

export default function Project({ name, description, tecks, siteUrl, gitRepoUrl }: ProjectProps) {
  const router = useRouter()

  return (
    <div className="mb-10 flex gap-8">
      <div className="flex w-160 flex-col gap-5 rounded-lg border border-[#a9adb280] p-5">
        <div onClick={() => router.push("/projects/" + name)} className="w-full cursor-pointer rounded-lg bg-gray-400">
          <Image src={`/captures/${name}/capture-1.png`} alt="Capture Image" width={2880} height={1800} />
        </div>
        <div>
          <p className="text-xl tracking-widest text-white uppercase">{name}</p>

          <div className="mt-3">{description}</div>

          <div className="mt-5 grid grid-cols-3 gap-2 max-[500px]:grid-cols-2 sm:grid-cols-4">
            {tecks.map((teck, index) => (
              <TeckLabel key={index} name={teck} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Link
              href={gitRepoUrl}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#a9adb21a] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#2b2f31]"
              target="_blank"
            >
              <Image src="/icons/github-reverse.svg" width={20} height={20} alt="GitHub Icon" />
              code source
            </Link>

            <Link
              href={siteUrl}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#a9adb21a] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#2b2f31]"
              target="_blank"
            >
              <Image src="/icons/globe.svg" width={20} height={20} alt="Globe Icon" />
              site
            </Link>
          </div>
        </div>
      </div>
      <Link href={"/projects/" + name} className="hidden h-fit shrink-0 rounded-full bg-[#2b2f31] p-2 sm:block">
        <Image src="/icons/share.svg" width={18} height={18} alt="Share Icon" />
      </Link>
    </div>
  )
}
