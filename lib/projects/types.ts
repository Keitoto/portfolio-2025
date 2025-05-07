// interface IProject {
//   metadata: IProjectMetadata
//   content: string
// }

export interface IProjectMetadata {
  title: string
  description: string
  tags: string[]
  demoLink?: string
  githubLink?: string
  articleLink?: string
  thumbNail: string
  slug: string
  publishedAt: string
}
