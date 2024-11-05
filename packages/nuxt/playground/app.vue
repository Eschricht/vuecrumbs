<script setup>
const test = useVuecrumbs({
  prependWith: ['/'],
})
</script>

<template>
  <div>
    <pre><code>{{ test.map((crumb) => crumb.label) }}</code></pre>
    <NuxtPage />
  </div>
</template>
