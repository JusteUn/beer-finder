import VLogin from '@/views/auth/VLogin.vue'
import ALayout from '@/components/layouts/auth/ALayout.vue'
import VRegister from '@/views/auth/VRegister.vue'

const authRoutes = [
  {
    path: '/login',
    name: 'auth',
    component: ALayout,
    children: [
      {
        path: '',
        name: 'login',
        component: VLogin
      },
      {
        path: '/register',
        name: 'register',
        component: VRegister
      }
    ]
  }
]

export default authRoutes
