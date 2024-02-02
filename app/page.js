import Header from './component/layer/header'
import Hero from './component/layer/hero'
import HOMEMENU from './component/layer/homeMenu'
import SECTIONHEADER from './component/layer/sectionheader'

export default function Home() {
  return (
    <>
      <Hero />
      <HOMEMENU />
      <section className='text-center my-16'>
        <SECTIONHEADER subHeader={'Our story'} mainHeader={'About us'} />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p> the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <section className='text-center my-8'>
        <SECTIONHEADER subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className='mt-8'>
          <a className='text-4xl underline' href="tel:+4675487454">+46 7548 7454</a>
        </div>
      </section>
    </>
  )
}
