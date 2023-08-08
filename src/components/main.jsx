import React from 'react'
import videoBg from '../assets/videoBg3.mp4'
import BlogPostApp from './BlogPostApp'

const Main = () => {
  return (
    <div className='main'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
            <BlogPostApp />
    </div>
    </div>
  )
}

export default Main