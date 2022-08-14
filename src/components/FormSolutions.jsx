import React from 'react'
import ControlledForm from './ControlledForm'

export default function FormSolutions({header}) {
  return (
    <div>
        <h2 className='app-heading'>{header}</h2>
        <div className="blog_post" style={{ margin:"0 auto" }}>
            <div className="container_copy">
                <ControlledForm />
            </div>  
        </div>        
    </div>
  )
}
