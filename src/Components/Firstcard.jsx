import React from 'react'

export default function Firstcard(props) {
  return (
    <div className='firstcard flex justify-center'>
        <div className="first-card w-[250px] h-[200px]">
           <div className="first-image"><img className='pt-[20px]' src={props.img} alt="" /></div>
           <div className="first-text"><h1 className="font-medium pt-[10px]">{props.text}</h1></div>
           <div className="first-title"><p className="text-[gray] pt-[10px] dark:text-[#303030]">{props.title}</p></div>
        </div>
    </div>
  )
}
