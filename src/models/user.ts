export default interface User {
    username: string
    firstname: string
    lastname: string
    email: string
    created_at: string
    role: 'admin' | 'user'
    img: string
}