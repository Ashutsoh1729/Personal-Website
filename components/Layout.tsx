import React from 'react'
import Navbar from './Navbar'
import image from "../public/Navbar/IMAGE 2023-05-12 14:38:12.jpg"


interface LayoutProps{
    children: React.ReactNode,
}




const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
      <>
        <Navbar image={image} name='Ashutosh Hota' imgHeight={40} imgWidth={40}/>
      <div className=''>
          {children}
    </div>  
      </>
  )
}

export default Layout