export default interface Beer {
  name: string
  description: string
  created_at: string
  img: string
  degrees: number
  type: 'Blond' | 'White' | 'IPA' | 'Brown' | 'Red'
}
