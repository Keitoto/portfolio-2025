export interface IWorkCard {
  title: string
  description: string
  tags: string[]
  demoLink: string
  githubLink: string
  articleLink: string
  thumbNail: string
  id: string
}

export interface ISkillsTableRow {
  title: string
  primary?: string[]
  secondary?: string[]
}
