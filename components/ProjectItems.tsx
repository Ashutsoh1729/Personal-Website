import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProjectItemsProps{
    name: string,
    url?: any,
    context?: string
    img?: any,

}



const ProjectItems:React.FC<ProjectItemsProps> = ({name,url,context,img}) => {
  return (
      <div className='w-fll border-2 border-purple-500 px-6 py-5 my-4 rounded-3xl'>
          <Link href={url}>
              <div className='grid grid-cols-12'>
                  
              {/* First Div will contains the Headin and The context and all data  */}
                  <div className=' col-span-8'>
                      <h1 className=' text-2xl pb-3 font-sans font-semibold'>{name}</h1>
                      <p>{ context}</p>
              </div>
              {/* The second div will contain the Image and Otehr Things */}
                  <div className=' col-span-4 justify-self-end '>
                      <div className=' right-0'>
                      <Image  src={ img} alt='' width={100} height={20}/>
                      </div>
              </div>
              </div>
              {/* <div></div> */}
          </Link>
    </div>
  )
}

export default ProjectItems