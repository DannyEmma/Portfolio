export type Teck =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "prisma"
  | "postgresql"
  | "mistralai"
  | "mediastack"
  | "stripe"
  | "better-auth"

export type Project = {
  name: string
  description: React.ReactElement
  tecks: Teck[]
  features: React.ReactElement
  capturesPath: string[]
  gitRepoUrl: string
  siteUrl: string
}

export type Work = {
  date: string
  workstation: string
  company: string
  employmentType: string
  description: string
}
