import React from 'react'
import { useParams } from 'react-router-dom'


export default function Company() {
    const params = useParams();
    console.log(params)
  return (
    <div>
        <h2>Company</h2>
        <h3>{params.name}</h3>
    </div>
  )
}
