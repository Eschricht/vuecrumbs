import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: {
          label: 'Home',
        },
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: false,
      },
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/Nested.vue'),
      children: [
        {
          path: '',
          name: 'nested-default',
          component: () => import('../views/nested/Entry.vue'),
        },
        {
          path: 'alternative',
          name: 'nested-alternative',
          component: () => import('../views/nested/Alternative.vue'),
          meta: {
            breadcrumb: {
              label: 'alt',
            },
          },
        },
        {
          path: ':id',
          name: 'nested-dynamic',
          component: () => import('../views/nested/Dynamic.vue'),
          props: true,
          meta: {
            breadcrumb: route => ({
              label: `dynamic - ${route.params.id}`,
            }),
          },
        },
      ],
    },
  ],
})

export default router
