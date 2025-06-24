import React from 'react'

export default function Title({title,subTitle,align,font}) {
  return (
    <div className={`flex flex-col justify-center items-center text-center gap-4 pt-20 ${align === "left" && "md:items-start md:text-left"}`}>
      <h1 className={`text-4xl md:text-[40px] ${font ||"font-playfair" }` }>{title}</h1>
      <pc className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</pc>
    </div>
  )
}
