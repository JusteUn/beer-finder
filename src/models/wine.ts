export default interface Wine {
  name: string
  description: string
  created_at: string
  img: string
  degrees: number
  color: 'Red' | 'White' | 'Rose'
}
