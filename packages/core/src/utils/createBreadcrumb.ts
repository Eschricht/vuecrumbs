import { type RouteLocationMatched, type RouteLocationRaw, type RouteLocationResolvedGeneric, useRouter } from 'vue-router'
import { toTitleCase } from './toTitleCase'

export interface Breadcrumb {
  to: RouteLocationResolvedGeneric
  label: string
  ariaLabel: string
  icon?: string
}

export function createBreadcrumb(route: RouteLocationRaw | RouteLocationMatched, router = useRouter()): Breadcrumb | null {
  const _route = router.resolve(route)

  if (!_route.matched.length) {
    return null
  }

  const breadcrumbMetaData = (typeof _route.meta.breadcrumb === 'function' ? _route.meta.breadcrumb(_route) : _route.meta.breadcrumb)

  if (breadcrumbMetaData === false) {
    return null
  }

  const path = _route.fullPath.split('/').filter(Boolean).pop()
  const label = breadcrumbMetaData?.label || (path && toTitleCase(path)) || (typeof _route.name === 'string' && toTitleCase(_route.name))

  if (label) {
    return {
      to: _route,
      label: breadcrumbMetaData?.label || label,
      ariaLabel: breadcrumbMetaData?.ariaLabel || label,
      icon: breadcrumbMetaData?.icon,
    }
  }
  return null
}
