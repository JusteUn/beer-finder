import VSpiritsList from '@/views/dashboard/spirits/VSpiritsList.vue'

const spiritsRoutes = [
  {
    path: '/spirits',
    name: 'spirits',
    meta: {
      displayName: 'Spirits'
    },
    children: [
      {
        path: '',
        name: 'spirits-list',
        component: VSpiritsList,
        meta: {
          displayName: 'All Spirits'
        }
      }
    ]
  }
]

export default spiritsRoutes
