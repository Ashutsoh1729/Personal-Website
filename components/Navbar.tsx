import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


// Not needed for this
interface NavbarProps {
    image: any,
    name: string,
    imgWidth?: number,
    imgHeight?: number
}



const Navbar: React.FC<NavbarProps> = ({ image, name, imgHeight, imgWidth }) => {
    return (
        <nav className=' '>
            <div className=' flex flex-row justify-between py-2 shadow-md py-4'>

                {/* Left Div */}
                <div className='ml-4' >

                    <ul className='flex flex-row items-center justify-center'>
                        <li >
                            <a href="https://github.com/Ashutsoh1729">
                                <Image className=' rounded-full' src={image} width={imgWidth} height={imgHeight} alt='' />
                            </a>
                        </li>
                        <li className='ml-4 '>
                            <p className=' text-2xl font-sans font-semibold'>{name}</p>
                        </li>
                    </ul>

                </div>
                {/* Right Div */}
                <div className='flex flex-row items-center justify-center mr-16 '>
                    <ul className=' nav-items flex flex-row items-center justify-center'>
                        <Link href={'/#profile'}>
                        <li className=' nav-item mr-8 font-medium  transition-transform text-xl hover:text-purple-500'>
                                Profile
                        </li>
                        </Link>
                        <Link href={'/projects'}>
                        <li className=' nav-item mr-8 font-medium  transition-transform text-xl hover:text-purple-500'>
                                Projects
                            </li>
                        </Link>
                        <li className=' nav-item mr-8 font-medium  transition-transform text-xl hover:text-purple-500'>
                            <a href="#contact">
                                Contact
                            </a>
                            s</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar