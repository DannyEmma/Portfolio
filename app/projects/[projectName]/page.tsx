import TeckLabel from "@/components/TeckLabel/TeckLabel"
import { projects } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default async function ProjectPage({ params }: { params: { projectName: string } }) {
  const { projectName } = await params

  const currentProject = projects.find((p) => p.name === projectName)

  return (
    <div>
      {/* ---------- HEADER ---------- */}
      <div className="mt-10 mb-10 flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
        <h1 className="text-xl font-bold tracking-widest text-white uppercase">{currentProject?.name}</h1>

        <div className="flex w-full flex-col gap-3 sm:w-fit sm:flex-row">
          <Link
            href={currentProject?.gitRepoUrl ?? "/"}
            className="flex items-center justify-center gap-2 rounded-full bg-[#a9adb21a] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#2b2f31]"
            target="_blank"
          >
            <Image src="/icons/github-reverse.svg" width={20} height={20} alt="GitHub Icon" />
            code source
          </Link>

          <Link
            href={currentProject?.siteUrl ?? "/"}
            className="flex items-center justify-center gap-2 rounded-full bg-[#a9adb21a] px-4 py-2 text-xs font-bold text-white uppercase hover:bg-[#2b2f31]"
            target="_blank"
          >
            <Image src="/icons/globe.svg" width={20} height={20} alt="Globe Icon" />
            Site
          </Link>
        </div>
      </div>

      {/* ---------- DESCRIPTION ---------- */}
      <div>{currentProject?.description}</div>

      <h2 className="mt-16 mb-5 font-bold tracking-widest text-white uppercase">Teck Stack</h2>

      <div className="grid grid-cols-3 gap-2 max-[500px]:grid-cols-2 sm:grid-cols-4">
        {currentProject?.tecks.map((t, index) => (
          <TeckLabel key={index} name={t} />
        ))}
      </div>

      <h2 className="mt-16 mb-5 font-bold tracking-widest text-white uppercase">Fonctionnalités clés</h2>
      <div>{currentProject?.features}</div>

      <h2 className="mt-16 mb-5 font-bold tracking-widest text-white uppercase">Aperçu du projet</h2>

      <div className="flex flex-col gap-4">
        {currentProject?.capturesPath.map((path, index) => (
          <div key={index} className="w-full rounded-xl border-2 border-gray-300 bg-white">
            <Image className="rounded-xl" src={path} width={2880} height={1800} alt="Project Capture" />
          </div>
        ))}
      </div>
    </div>
  )
}
