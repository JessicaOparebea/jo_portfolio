import { GallerySection } from '../../components/Gallery'
import { SectionHeader } from '../../components/Shared'

export default function Gallery() {
  return (
    <div className='flex flex-col'>
      {/* <SectionHeader title='Gallery' textColor='text-indigo-950' underlineColor='bg-indigo-950' /> */}
      <GallerySection />
    </div>
  )
}
