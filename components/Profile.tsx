import React from 'react'
import profileImage from "../public/Navbar/IMAGE 2023-05-12 14:38:12.jpg"
import Image from 'next/image'
import Button from './Button'

interface ProfileProps{
    profileImgWidth?: number,
    profileImgHight?: number
}

const Profile:React.FC<ProfileProps> = ({profileImgHight,profileImgWidth}) => {
  return (
      <section id='profile' className='my-8 mx-32 mb-16'>
          <div className='grid grid-cols-4'>
              <div className='col-span-2 lg:mt-32 lg:ml-10'>
                  <div className='font-sans '>
                  <h1 className='text-7xl font-semibold font-sans'>Hello Everyone!</h1>
                  <p className='text-4xl my-3 font-sans'>I am <span className='text-purple-500 text-7xl ml-4 '>Ashutosh</span></p>
                  <p className='text-4xl mt-6  font-sans'>A MERN , Fullstack developer</p><br/>
                      {/* <span className='text-4xl'>Web3 Enthusiasist</span> */}


                     {/* For Projects and Github Button */}
                      <div className='flex flex-row m'>
                          {/* <button>Projects</button> 
                          <button>GitHub</button> */}
                          <Button name="Projects" link="/projects" />
                          <Button name='GitHub' link='https://github.com/Ashutsoh1729'/>
                    </div>
                  </div>

              </div>
              <div className='col-span-2'>
                  <div className='lg:visible h-15 w-150'>
                  {/* <Image src={profileImage} alt='' width={profileImgWidth} height={profileImgHight} /> */}
                  <Image className='pl-8 pt-8 rounded-full' src={profileImage} alt='' width={profileImgWidth} height={profileImgHight} />
                  </div>
              </div>

          </div>
    </section>
  )
}

export default Profile