import React from 'react'

export default function Info(props) {
  return (
    <ul className='text-xl'>
      <li className='font-bold'>{props.number}K+</li>
      <li>{props.description}</li>
    </ul>
  )
}
