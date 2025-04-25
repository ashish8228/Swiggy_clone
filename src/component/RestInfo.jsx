import React from 'react'

const RestInfo = ({RestData}) => {
  return (
    <>
    <div className='max-w-[90%] mx-auto flex justify-between mb-5'>
        <div className='w-[70%]'>
            <p className=' text-gray-700 font-semibold mt-4 mb-2 text-[19px]'>{RestData?.name}</p>
            <p className='font-bold'>{"₹"+RestData?.price / 100}</p>
            
            <p><span className='text-green-500 font-bold'>★</span>{RestData?.ratings?.aggregatedRating?.rating+" ("+RestData?.ratings?.aggregatedRating?.ratingCountV2+")"}</p>
            
            <p className='mt-4 text-gray-700'>{RestData?.description}</p>
        </div>
        <div className='w-[20%] relative h-40'>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.imageId} className='w-auto h-36 object-cover rounded-2xl'/>
            <button className='absolute bottom-0 left-0 text-green-600 rounded-xl px-5 py-3 bg-white border-black border-2 cursor-pointer w-[146px] font-bold'>Add</button>
        </div>

        
        
      </div>
      <hr className='mt-2 mb-2 max-w-[90%] mx-auto' />
      
    </>
    
    
  )
}

export default RestInfo;