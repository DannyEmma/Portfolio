import { Work as WorkType } from "@/lib/types"

export default function Work({ date, workstation, company, employmentType, description }: WorkType) {
  return (
    <div className="mb-10 flex gap-10">
      <div className="hidden min-w-40 sm:block">
        <p className="text-nowrap">{date}</p>
      </div>
      <div>
        <p className="text-[18px] font-semibold text-white">{workstation}</p>
        <p className="mb-4 hidden sm:block">{`${company} • ${employmentType}`}</p>
        <p className="mb-4 sm:hidden">{`${company} • ${employmentType} • ${date}`}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
