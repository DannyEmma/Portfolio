import { Teck } from "@/lib/types"
import Image from "next/image"

interface TeckLabelProps {
  name: Teck
}

export default function TeckLabel({ name }: TeckLabelProps) {
  const configs = {
    react: {
      displayName: "React",
      bgColor: "hsl(200deg,88.51%,15%)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/react.svg",
    },
    nextjs: {
      displayName: "Next JS",
      bgColor: "hsl(0deg,0%,25%, 0.6)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/nextjs.svg",
    },
    typescript: {
      displayName: "TypeScript",
      bgColor: "hsl(210.49deg,77.22%,18%)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/typescript.svg",
    },
    tailwind: {
      displayName: "Tailwind",
      bgColor: "hsl(196.14deg,100%,20%)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/tailwindcss.svg",
    },
    prisma: {
      displayName: "Prisma",
      bgColor: "hsl(0deg,0%,80%, 0.3)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/prisma.svg",
    },
    postgresql: {
      displayName: "PostgreSQL",
      bgColor: "hsl(206.37deg,46.19%,25%)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/postgresql.png",
    },
    mistralai: {
      displayName: "Mistral AI",
      bgColor: "hsl(17 40% 30% / 1)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/mistral.svg",
    },
    mediastack: {
      displayName: "Mediastack API",
      bgColor: "hsl(220.7deg,58.97%,38.24%,0.7)",
      textColor: "hsl(0deg,0%,80%)",
      imgSrc: "/icons/mediastack.svg",
    },
    stripe: {
      displayName: "Stripe",
      bgColor: "hsl(247.65deg,30%,60%)",
      textColor: "hsl(0deg,0%,90%)",
      imgSrc: "/icons/stripe.svg",
    },
    "better-auth": {
      displayName: "Better Auth",
      bgColor: "hsl(0deg,0%,75%,1)",
      textColor: "hsl(0deg,0%,0%)",
      imgSrc: "/icons/better-auth.png",
    },
  }

  const currentConfig = configs[name]

  return (
    <div className={`flex h-6 items-center justify-center gap-2 rounded-full`} style={{ background: currentConfig.bgColor }}>
      <Image src={currentConfig.imgSrc} width={18} height={18} alt="React Icon" />
      <p className="text-xs font-bold" style={{ color: currentConfig.textColor }}>
        {currentConfig.displayName}
      </p>
    </div>
  )
}
