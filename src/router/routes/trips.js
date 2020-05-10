export default [
  {
    path: '/trips',
    name: 'trips',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/components/Trips.vue')
  }
]
