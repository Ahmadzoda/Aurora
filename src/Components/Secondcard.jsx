import React from 'react'

export default function Secondcard(props) {
  return (
    <div className='secondcard flex justify-center'>
        <div className="second-card w-[200px] h-[160px] bg-[#c5c5c5]">
            <div className="second-image flex justify-center"><img className='w-[90%] pt-[60px]' src={props.img} alt="" /></div>
        </div>
    </div>
  )
}
