import type { IProjectMetadata } from '@/lib/projects/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { ProjectMetadataSchema } from '@/lib/projects/schema'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

function getProjectMetadata(filenameWithExtension: string): IProjectMetadata {
  const slug = filenameWithExtension.replace(/\.mdx/, '')
  const filePath = path.join(rootDirectory, filenameWithExtension)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data } = matter(fileContent)
  const parsed = ProjectMetadataSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(`Invalid project metadata: ${parsed.error.message}`)
  }
  return { ...parsed.data, slug }
}

export async function getProjects(): Promise<IProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)
  const projects = files.map(file => getProjectMetadata(file))
  return projects
}
