import React from 'react'

interface Props {
    params: {
        id: string
    }
}

export default function page(props:Props) {
    
    
  return (
    <div>user with id page which is {props.params.id}</div>
  )
}