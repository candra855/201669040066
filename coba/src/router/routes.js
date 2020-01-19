
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/inggris', component: () => import('pages/Inggris.vue') },
      { path: '/spanyol', component: () => import('pages/Spanyol.vue') },
      { path: '/italy', component: () => import('pages/Italy.vue') },
      { path: '/jerman', component: () => import('pages/Jerman.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
