import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'
import Button from './Button'

interface ProjectItemsProps{
    name: string,
    gitUrl?: any,
    webUrl?:any,
    context?: string
    img?: any,

}



const ProjectItems:React.FC<ProjectItemsProps> = ({name,gitUrl,webUrl,context,img}) => {
  return (
      <div className='w-fll border-2 border-purple-500 px-6 py-5 my-4 rounded-3xl'>

              <div className='grid grid-cols-12'>
                  
              {/* First Div will contains the Headin and The context and all data  */}
                  <div className=' col-span-8'>
                      <h1 className=' text-2xl pb-3 font-sans font-semibold'>{name}</h1>
                      <p>{context}</p>
                      <div className='flex flex-row mt-4'>
                          {/* <button>Projects</button> 
                          <button>GitHub</button> */}{webUrl && 
                          <Button name="Web Link" link={webUrl} />
                          }
                          {gitUrl && <Button name='GitHub' link={gitUrl} />}
                      </div>
                      
              </div>
              {/* The second div will contain the Image and Otehr Things */}
                  <div className=' col-span-4 justify-self-end '>
                      <div className=' right-0'>
                      <Image  src={ img} alt='' width={100} height={20}/>
                      </div>
              </div>
              </div>
              {/* <div></div> */}

    </div>
  )
}

export default ProjectItems