# crumby-vue

crumby-vue Core is a lightweight and flexible breadcrumb management utility for Vue.js applications. It provides a simple way to manage and display breadcrumbs in your Vue projects, supporting both static and dynamic routes.

## ✨ Features

- 🥖 **Easy Integration**: Seamlessly integrates with Vue.js and Vue router.
- 🧩 **Highly Customizable**: Customize breadcrumb labels, icons, and structure.
- 🔗 **Dynamic Route Support**: Handles dynamic and nested routes effortlessly.
- ⚡ **Lightweight**: Minimal footprint with high performance.

## 📦 Installation

Install crumby-vue Core using npm or pnpm:

```bash
npm install crumby-vue
# or
pnpm add crumby-vue
```

## 🚀 Getting Started

### Setup

First, import and use the `useBreadcrumbs` composable in your Vue component:

```vue
<script setup lang="ts">
import { useBreadcrumbs } from 'crumby-vue'

const breadcrumbs = useBreadcrumbs()
</script>

<template>
  <!-- Example usage -->
  <div>
    <nav>
      <ul>
        <li v-for="crumb in breadcrumbs" :key="crumb.to">
          <RouterLink :to="crumb.to">
            {{ crumb.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
```

### Customizing Breadcrumbs

You can customize the breadcrumbs by passing an options object to `useBreadcrumbs`:

```typescript
const breadcrumbs = useBreadcrumbs({
  prependWith: '/',
  appendWith: '/end',
  ignore: ['/ignore-this']
})
```

#### Options

| Option        | Type                                     | Description                                 | Example Value       |
|---------------|------------------------------------------|---------------------------------------------|---------------------|
| `prependWith` | `RouteLocationRaw \| RouteLocationRaw[]` | Route(s) to prepend to the breadcrumb list. | `'/'`               |
| `appendWith`  | `RouteLocationRaw \| RouteLocationRaw[]` | Route(s) to append to the breadcrumb list.  | `'/end'`            |
| `ignore`      | `RouteLocationRaw[]`                     | An array of routes to ignore                | `['/ignore-this']`  |

### Defining Breadcrumb Meta Data

Override the default breadcrumb labels by adding a `breadcrumb` property to your route's meta object:

```typescript
{
  path: '/',
  component: HomeView,
  meta: {
    breadcrumb: {
      label: 'Home',
      icon: 'i-home',
    },
  },
}
```

For dynamic routes, use a function to generate breadcrumb labels based on route parameters:

```typescript
{
  path: '/:id',
  component: DynamicView,
  meta: {
    breadcrumb: (route) => ({
      label: route.params.id,
    }),
  },
}
```

## 📄 License

crumby-vue Core is licensed under the [MIT License](../../LICENSE).

## 🙌 Contributing

Contributions are welcome! Please read our [contributing guidelines](../../CONTRIBUTING.md) first.

## 📞 Support

If you have any questions or need help, feel free to open an issue.

---

Happy coding with crumby-vue! 🥖✨
