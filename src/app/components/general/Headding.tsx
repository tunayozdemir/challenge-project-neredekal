import React from 'react'

interface HeaddingProps {
  center?: boolean,
  text: string
}

const Headding: React.FC<HeaddingProps> = ({ center, text }) => {
  return (
    <div className={` text-slate-500 my-3 md:my-10 px-3 md:px-10 md:text-xl ${center ? 'text-center' : 'text-start'}`}>
      {text}
    </div>
  )
}

export default Headding