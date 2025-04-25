import React, { useState } from 'react'
import { useParams } from 'react-router'

const SearchFood = () => {

    const[InputText, SetInputText] = useState("");
    const{id} = useParams();
    console.log(InputText)

  return (
    <div className='w-[80%] mx-auto mt-5'>
        <input type="text" placeholder='Search here' onChange={(e)=>SetInputText(e.target.value)} className='p-2 border bg-gray-300 text-2xl  rounded w-full' />
    </div>
  )
}

export default SearchFood