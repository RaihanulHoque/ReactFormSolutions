import React, { useEffect } from 'react'

import {Outlet, Link, useNavigate, useLocation} from 'react-router-dom'
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

export default function About() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  useEffect(()=>{
    navigate('/about/carrier')
  }, [navigate])
  return (
    <Row>
      {/* <div className="blog_post" style={{ margin:"0 auto" }}>
            <div className="container_copy">
                  <h2>ABOUT US</h2>
            </div>  
        </div>     */}
      <h2 className='app-heading'>About Us </h2>
        <Col sm={5}>
          <Card style={{ width: '12rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                  <Link to='company/IsySolutions'>Company
                  </Link>    
              </ListGroup.Item>
              <ListGroup.Item>
                  <Link to='carrier'>Carrier
                  </Link>    
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={7}>
          <Outlet />

        </Col>
        
    </Row>
  )
}
