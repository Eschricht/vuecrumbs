import path from 'node:path'
import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export const repoRoot = path.join(__dirname, '..')
export const packagesDir = path.join(repoRoot, 'packages')

export const coreRoot = path.join(packagesDir, 'core')
export const coreSrc = path.join(coreRoot, 'src')

export const nuxtRoot = path.join(packagesDir, 'nuxt')
export const nuxtSrc = path.join(nuxtRoot, 'src')
