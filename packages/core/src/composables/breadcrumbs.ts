import { computed, type MaybeRef, unref } from 'vue'
import { type RouteLocationRaw, useRoute, useRouter } from 'vue-router'
import { type Breadcrumb, createBreadcrumb } from '../utils/createBreadcrumb'

interface Options {
  prependWith?: MaybeRef<RouteLocationRaw | Array<RouteLocationRaw>>
  appendWith?: MaybeRef<RouteLocationRaw | Array<RouteLocationRaw>>
  ignore?: MaybeRef<Array<RouteLocationRaw>>
}

export function useBreadcrumbs(options: Options = {}) {
  const route = useRoute()
  const router = useRouter()
  const prependWith = options.prependWith || []
  const appendWith = options.appendWith || []
  const ignore = options.ignore || []
  const normalizedIgnore = computed(() => unref(ignore)
    .map(ignore => router.resolve(ignore))
    .filter(Boolean))

  const matches = computed(() => [...[unref(prependWith)].flat(), ...route.matched.map((match) => {
    if (match.children.length > 0) {
      const directlyNested = match.children.find(child => child.path === '')

      if (directlyNested?.name) {
        return directlyNested
      }
    }

    return match
  }), ...[unref(appendWith)].flat()].filter(Boolean))

  const breadcrumbs = computed(() => {
    const breadcrumbs: Array<Breadcrumb & { isCurrent: boolean }> = []

    for (const match of matches.value) {
      const breadcrumb = createBreadcrumb(match, router)
      const isCurrent = breadcrumb?.to.path === route.path && breadcrumb.to.name === route.name

      if (
        breadcrumb
        && breadcrumbs.every(r => r.to.path !== breadcrumb.to.path && r.to.name !== breadcrumb.to.name)
        && normalizedIgnore.value.every(r => r.path !== breadcrumb.to.path && r.name !== breadcrumb.to.name)
        && breadcrumb.label
      ) {
        breadcrumbs.push({
          ...breadcrumb,
          isCurrent,
        })
      }
    }

    return breadcrumbs
  })

  return breadcrumbs
}
