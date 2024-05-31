import VHome from "@/views/dashboard/VHome.vue"

const homeRoutes = [
  {
    path: '',
    name: 'home',
    component: VHome,
    meta: {
      displayName: 'Dashboard',
    }
  },
]

export default homeRoutes