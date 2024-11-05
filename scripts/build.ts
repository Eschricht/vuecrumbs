import { execSync } from 'node:child_process'
import consola from 'consola'
import { repoRoot } from './paths'

execSync('pnpm run clean', { stdio: 'inherit', cwd: repoRoot })
execSync('pnpm -r --filter=./packages/core build', { stdio: 'inherit', cwd: repoRoot })
execSync('pnpm -r --filter=!./packages/core --filter=./packages/* build', { stdio: 'inherit', cwd: repoRoot })

consola.success('Packages built successfully!')
