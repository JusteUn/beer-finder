import VUsersList from '@/views/dashboard/users/VUsersList.vue'

const usersRoutes = [
  {
    path: '/users',
    name: 'users',
    meta: {
      displayName: 'Users'
    },
    children: [
      {
        path: '',
        name: 'users-list',
        component: VUsersList,
        meta: {
          displayName: 'All Users'
        }
      }
    ]
  }
]

export default usersRoutes
