export interface Banner {
    id: number
    title: string
    description: string
    url: string
    image: string
  }
  
  export interface BannerResponse {
    payload: Banner[]
    message: string
  }
  
  