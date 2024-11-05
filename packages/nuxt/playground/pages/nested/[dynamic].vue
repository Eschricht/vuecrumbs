<script setup lang="ts">
definePageMeta({
  breadcrumb: route => ({
    label: [route.params.dynamic].flat()[0] ?? 'dynamic',
  }),
})

const route = useRoute('nested-dynamic')

const param = computed(() => route.params.dynamic)
</script>

<template>
  <p>Dynamic route - {{ param }}</p>
</template>
