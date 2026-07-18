import React from 'react'
import SingUpPage from '../Components/SingUpPage'
import liu from "../Images/liu.jpg"
export default function SingUp() {
  return (
    <div className='flex  gap-15  w-6xl mx-auto '>
    <img src={liu} alt="" className='w-[610px] object-cover' />
      <SingUpPage/>
    </div>
  )
}
