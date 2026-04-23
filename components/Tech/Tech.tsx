import { StaticImageData } from "next/image"

export default function Tech({ img, title }: { img: React.ReactElement; title: string }) {
  const transition = "transition-all duration-300"

  return (
    <div className="group flex h-24 min-w-32 flex-col items-center justify-center gap-2 rounded-[8px] border border-[#a9adb280] p-3 transition-all duration-150 hover:bg-[#a9adb21a]">
      <div className={`${transition} flex h-8 translate-y-0 items-center justify-center group-hover:-translate-y-[5px]`}>{img}</div>

      <p>{title}</p>
    </div>
  )
}
