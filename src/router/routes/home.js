const base = [
  {
    path: '/',
    name: 'addRoutes演示',
    meta: { title: 'addRoutes演示' },
    component: (resolve) => {
      require.ensure(['@/views/addRoutes'], (require) => {
        resolve(require('@/views/addRoutes'))
      })
    }
  }
]

export default base
