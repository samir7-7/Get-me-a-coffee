import React from 'react'

const profile = ({params}) => {
  return (
    <div className='text-white'>
      Hello! {params.username}
    </div>
  )
}

export default profile
