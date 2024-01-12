import React from 'react'
interface BorderProps{
  categoria:string;
}

export const BorderStyle: React.FC<BorderProps> = ({ categoria }) => {
  return (
    <div className={"border-2 border-pink-600 rounded-lg text-center"}>{categoria}</div>
  )
}
