<script setup lang="ts">
import { useBreadcrumbs } from 'crumby-vue'

const crumbs = useBreadcrumbs({
  prependWith: '/',
  appendWith: '/bajskorv',
})
</script>

<template>
  <div class="crumb-wrapper">
    <template v-for="(crumb, index) in crumbs" :key="index">
      <RouterLink v-if="!crumb.isCurrent" class="crumb" :to="crumb.to" :aria-label="crumb.ariaLabel">
        {{ crumb.label }}
      </RouterLink>

      <span v-else class="crumb">{{ crumb.label }}</span>

      <span v-if="index < crumbs.length - 1"> &gt; </span>
    </template>
  </div>
</template>

<style scoped>
.crumb-wrapper {
  display: flex;
  gap: 0.25em;
  align-items: center;
}

.crumb {
  padding: 0em 0.5em;
}
</style>
