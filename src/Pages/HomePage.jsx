import React from 'react'
import Leftnav from '../Components/Leftnav';
import Rightnav from '../Components/Rightnav';
import PostDisplay from '../Components/PostDisplay';
import InputPost from '../Components/InputPost';
function HomePage() {
  return (
    <div className='homedisplay'>
      <Leftnav/>
     <InputPost/>
     <PostDisplay/>
      <Rightnav/>
    </div>
  )
}

export default HomePage
