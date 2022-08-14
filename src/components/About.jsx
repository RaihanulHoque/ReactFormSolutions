import React from 'react'
import {Outlet} from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h2 className='app-heading'>About Us</h2>
        <div className="blog_post" style={{ margin:"0 auto" }}>
            <div className="container_copy">
                  <h2>ABOUT US</h2>
                  <Outlet />
            </div>  
        </div>    
    </div>
  )
}
