import DLayout from '@/components/layouts/dashboard/DLayout.vue'
import homeRoutes from './dashboard/home'
import beersRoutes from './dashboard/beers'
import winesRoutes from './dashboard/wines'
import spiritsRoutes from './dashboard/spirits'
import usersRoutes from './dashboard/users'

const dashboardRoutes = [
  {
    path: '',
    name: 'dashboard',
    component: DLayout,
    meta: {
      displayName: 'Home'
    },
    children: [
      ...homeRoutes,
      ...spiritsRoutes,
      ...usersRoutes
    ]
  }
]

export default dashboardRoutes
