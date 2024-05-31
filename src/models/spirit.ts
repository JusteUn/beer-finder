export default interface Spirit {
  name: string
  description: string
  created_at: string
  img: string
  degrees: number
  type: 'Cognac' | 'Vodka' | 'Whisky' | 'Rum' | 'Gin' | 'Tequila' | 'Liquor' | 'Brandy' | 'Other'
}
