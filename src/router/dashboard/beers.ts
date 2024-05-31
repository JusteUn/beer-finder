import VBeersList from '@/views/dashboard/beers/VBeersList.vue'

const beersRoutes = [
  {
    path: '/beers',
    name: 'beers',
    meta: {
      displayName: 'Beers'
    },
    children: [
      {
        path: '',
        name: 'beers-list',
        component: VBeersList,
        meta: {
          displayName: 'All Beers'
        }
      }
    ]
  }
]

export default beersRoutes
