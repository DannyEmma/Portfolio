import Image from "next/image"
import Introduction from "../components/Introduction/Introduction"
import Tech from "../components/Tech/Tech"
import Work from "../components/Work/Work"
import Project from "../components/Project/Project"
import { projects, works } from "@/lib/data"

export default function Home() {
  return (
    <>
      <Introduction />

      <h2 className="mt-27 mb-10 text-[18px] font-bold tracking-widest text-white uppercase">Tech Stack</h2>

      <div className="grid grid-cols-3 gap-5 max-[500px]:grid-cols-2 sm:grid-cols-4">
        <Tech img={<Image src="/icons/react.svg" width={32} height={32} alt="React icon" />} title="React" />
        <Tech img={<Image src="/icons/nextjs.svg" width={32} height={32} alt="Next.js icon" />} title="Next.js" />
        <Tech img={<Image src="/icons/typescript.svg" width={32} height={32} alt="TypeScript icon" />} title="TypeScript" />
        <Tech img={<Image src="/icons/tailwindcss.svg" width={32} height={32} alt="Tailwind icon" />} title="Tailwind" />
        <Tech img={<Image src="/icons/prisma.svg" width={32} height={32} alt="Prisma icon" />} title="Prisma" />
        <Tech img={<Image src="/icons/postgresql.png" width={32} height={32} alt="PostgreSQL icon" />} title="PostgreSQL" />
      </div>

      <h2 id="work-experience" className="mt-17 mb-10 pt-10 text-[18px] font-bold tracking-widest text-white uppercase">
        Expérience Professionnelle
      </h2>

      <div>
        {works.map((work, index) => (
          <Work
            key={index}
            date={work.date}
            workstation={work.workstation}
            company={work.company}
            employmentType={work.employmentType}
            description={work.description}
          />
        ))}
      </div>

      <h2 id="projects" className="mt-17 mb-10 pt-10 text-[18px] font-bold tracking-widest text-white uppercase">
        Projets
      </h2>

      <div>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            tecks={project.tecks}
            siteUrl={project.siteUrl}
            gitRepoUrl={project.gitRepoUrl}
          />
        ))}
      </div>
    </>
  )
}
