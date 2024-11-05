import type { RouteLocationNormalizedLoadedGeneric, RouteLocationResolvedGeneric } from 'vue-router'

export interface BreadcrumbData {
  icon?: string
  label?: string
  ariaLabel?: string
}

export interface BreadcrumbMeta {
  breadcrumb?: BreadcrumbData | ((route: RouteLocationResolvedGeneric | RouteLocationNormalizedLoadedGeneric) => BreadcrumbData) | false
}
