import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section>
                <div>
                    <h1>Everything is better with a Pizza</h1>
                    <p>Pizza is the missing piece that makes every day complete, a simple yet delicious  joy in life</p>
                </div>
                <div className='w-16 h-16 relative'>
                    <Image src={'/pizza.png'} layout={'fill'} object={'contain'} alt={'pizza'} />
                </div>
            </section>
        </>
    )
}
