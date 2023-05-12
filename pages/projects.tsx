import ProjectItems from '@/components/ProjectItems'
import React from 'react'





const projects = () => {

    const noteContext = 'I am Submiting all the tasks here with proof and source code. Here I have created a note-taking app using html, css, and javascript, dom concepts and used localStorage for the purpose of storing data.'
    const aicheContext = "I am Submiting all the tasks here with proof and source code. Here I have created an authentication system using passport, express, mongoose and also added a oauth system. As it is a Purely backend system it don't have website."
    // const 
    const noteTakingGitHubUrl = 'https://github.com/Ashutsoh1729/Note-Taking-App'
    const noteTakingWebsite = 'https://notes-app-by-js-only.netlify.app/'
    const authenticationGitHubUrl = 'https://github.com/Ashutsoh1729/Authentication'
    const image = 'data:image/png;base64,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'
    const counterWebsiteUrl ="https://strong-tulumba-e34ff7.netlify.app/"
    const counterNote = "This application is created to count no.It is created by me when i started learning javascript from scrimba."
  return (
      <>
          <section className='mx-32 my-8'>
              
              <h1 className='text-5xl font-sans font-bold pb-4 pl-2 pt-4 mb-6'>All the projcts will be shown here</h1>
              <ProjectItems name='AIChE Task' context={noteContext} webUrl={noteTakingWebsite} gitUrl={noteTakingGitHubUrl} img={image}/>
              <ProjectItems name='AIChE Task' context={noteContext}  gitUrl={authenticationGitHubUrl} img={image}/>
              <ProjectItems name='AIChE Task' context={counterNote} webUrl={counterWebsiteUrl}   img={image}/>
          </section>
      
          
      
      </>
  )
}

export default projects