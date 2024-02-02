import Image from "next/image";
import MENUITEM from "../menu/menuItem";
import SECTIONHEADER from "./sectionheader";

export default function HOMEMENU() {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className='absolute left-0 -top-[70px] text-left -z-10'>
                    <Image src={'/sallad1.png'} width={107} height={195} alt={'sallad'} />
                </div>
                <div className='absolute -top-36 right-0 -z-10'>
                    <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
                </div>
            </div>
            <div className="text-center mb-4">
                <SECTIONHEADER subHeader={'Check out'} mainHeader={'Menu'} />
            </div>
            <div className=" grid grid-cols-3 gap-4">
                <MENUITEM />
                <MENUITEM />
                <MENUITEM />
                <MENUITEM />
                <MENUITEM />
                <MENUITEM />
            </div>
        </section>
    )
}
