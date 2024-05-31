import VWinesList from '@/views/dashboard/wines/VWinesList.vue'

const beersRoutes = [
  {
    path: '/wines',
    name: 'wines',
    meta: {
      displayName: 'Wines'
    },
    children: [
      {
        path: '',
        name: 'wines-list',
        component: VWinesList,
        meta: {
          displayName: 'All Wines'
        }
      }
    ]
  }
]

export default beersRoutes
