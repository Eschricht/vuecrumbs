<template>
  <div>
    <div>
      <h1>This is a wrapper for nested example</h1>
      <div>
        <nav>
          <RouterLink to="/nested">
            Nested entry
          </RouterLink>

          <RouterLink to="/nested/alternative">
            Nested alternative
          </RouterLink>

          <RouterLink to="/nested/123?a=b&c=d">
            Dynamic route
          </RouterLink>
        </nav>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  margin-bottom: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
