# crumby-vue Nuxt Module

crumby-vue Nuxt Module provides seamless integration of crumby-vue with Nuxt.js, allowing you to manage and display breadcrumbs effortlessly in your Nuxt applications.

## ✨ Features

- 🥖 Easy integration with Nuxt.js
- 🧩 Customizable breadcrumb structure
- 🔗 Supports dynamic routes
- ⚡ Lightweight and performant

## 📦 Installation

Install the crumby-vue Nuxt Module using npm or pnpm:

```bash
npm install @crumby-vue/nuxt
# or
pnpm add @crumby-vue/nuxt
```

## 🚀 Getting Started

### Setup

Add the crumby-vue module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@crumby-vue/nuxt'],
})
```

### Usage

Use the `usecrumby-vue` composable in your Nuxt pages or components:

```vue
<script setup lang="ts">
const breadcrumbs = usecrumby-vue()
</script>

<template>
  <!-- Example usage -->
  <div>
    <nav>
      <ul>
        <li v-for="crumb in breadcrumbs" :key="crumb.to">
          <NuxtLink :to="crumb.to">{{ crumb.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
```

### Extending Breadcrumb Meta Data with `definePageMeta`

You can extend the breadcrumb meta data for your pages using the `definePageMeta` function. This allows you to customize the breadcrumb labels, icons, and other properties dynamically.

```vue
<script setup lang="ts">
definePageMeta({
  breadcrumb: route => ({
    label: `Page - ${route.params.id}`,
    icon: 'i-page',
  }),
})
</script>
<template>
  <div>
    Dynamic Page Content
  </div>
</template>
```

## 📄 License

crumby-vue Nuxt Module is licensed under the [MIT License](../../LICENSE).

## 🙌 Contributing

Contributions are welcome! Please read our [contributing guidelines](../../CONTRIBUTING.md) first.

## 📞 Support

If you have any questions or need help, feel free to open an issue.

---

For more detailed information on the core functionality of crumby-vue, please refer to the [Core README](../core/README.md).

Happy coding with crumby-vue! 🥖✨