import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { defineNuxtModule, addImports, addTypeTemplate } from '@nuxt/kit'

interface ModuleOptions {
  composableName: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'crumby-vue',
    configKey: 'crumby-vue',
  },
  defaults: {
    composableName: 'useBreadcrumbs',
  },
  setup(_options, _nuxt) {
    addTypeTemplate({
      filename: 'types/vuecrumb.d.ts',
      getContents() {
        return `// Generated by @vuecrumb/nuxt
import type { BreadcrumbMeta } from 'crumby-vue/types'

declare module '#app' {
  interface PageMeta extends BreadcrumbMeta {}
}

export {}
`
      },
    })

    addImports({
      name: 'useBreadcrumbs',
      as: _options.composableName,
      from: 'crumby-vue',
    })

    // Somewhat hacky... Move the vuecrumb type to the end of the nuxt.d.ts file to avoid conflicts
    _nuxt.hook('builder:generateApp', () => {
      const nuxtDtsPath = path.resolve(_nuxt.options.buildDir, 'nuxt.d.ts')

      if (existsSync(nuxtDtsPath)) {
        let content = readFileSync(nuxtDtsPath, 'utf-8')

        const lines = content.split('\n')
        const vuecrumbIndex = lines.findIndex(line => line.includes('types/vuecrumb.d.ts'))

        if (vuecrumbIndex !== -1) {
          const [vuecrumbLine] = lines.splice(vuecrumbIndex, 1)

          lines.splice(lines.length - 3, 0, vuecrumbLine) // Move it to the end of reference list
          content = lines.join('\n')

          writeFileSync(nuxtDtsPath, content, 'utf-8')
        }
      }
    })
  },
})
