import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    name: string,
    link: string,
}

const Button: React.FC<ButtonProps> = ({
    name, link
}) => {
    return (
        <div className='group'>
        <div className=' bg-purple-500 text-white hover:bg-transparent hover:borderd hover:border-purple-500 hover:text-purple-500 group-hover:border-2 rounded-full mr-4 px-4 py-1  '>
            <Link href={link}>
                <button className='text-2xl'>{name}</button>
            </Link>
        </div>
        </div>
    )
}

export default Button