import Navbar from '@/components/navbar'
import HeroSlider from '@/components/hero-slider'
import type { BannerResponse } from '@/types/banner'

async function getBanners() {
  const res = await fetch('https://bpiw.sadasa.id/backend-api/v1/banners', {
    next: { revalidate: 60 } // Revalidate every minute
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch banners')
  }
  
  const data: BannerResponse = await res.json()
  return data.payload
}

export default async function Home() {
  const banners = await getBanners()
  
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider banners={banners} />
      </main>
    </>
  )
}

