import React from 'react'

function Logo({width = "100%"}) {
  return (
    <img src='../../public/image.png' className="h-20 rounded-xl" style={{width}} alt='Logo placeholder' />
  )
}

export default Logo