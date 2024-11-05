import type { BreadcrumbData, BreadcrumbMeta } from './types'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta extends BreadcrumbMeta {}
}
