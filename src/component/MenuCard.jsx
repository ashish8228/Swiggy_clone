import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import RestInfo from './RestInfo';

const MenuCard = ({menuitems,selectfood}) => {

  const[IsOpen, SetOpen] = useState(true)

  if("categories" in menuitems){
    return(
      <div className='w-full'>
          <p className='text-2xl font-bold'>{menuitems?.title}</p>
        
          <div>
              {
                menuitems?.categories?.map((items)=><MenuCard key={items?.title} menuitems={items} selectfood={selectfood}/>)
              }
          </div>
      </div>
    )
  }



  if(selectfood==="veg"){
    return(
      <div className='w-full'>
        <div className='flex justify-between w-full'>
        <p className='text-2xl font-bold'>{menuitems?.title}</p>
        <button className='text-2xl mr-20' onClick={()=>SetOpen(!IsOpen)}>{IsOpen?<IoIosArrowUp />:<IoIosArrowDown />}</button>
        </div>
        <div>
          {
            menuitems?.itemCards?.filter((food)=>('isVeg' in food?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} RestData = {items?.card?.info}/>)
          }
        </div>

        
    </div>
    )
  }



  if(selectfood==="nonveg"){
    return(
      <div className='w-full'>
        <div className='flex justify-between w-full'>
        <p className='text-2xl font-bold'>{menuitems?.title}</p>
        <button className='text-2xl mr-20' onClick={()=>SetOpen(!IsOpen)}>{IsOpen?<IoIosArrowUp />:<IoIosArrowDown />}</button>
        </div>
        <div>
          {
            menuitems?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} RestData = {items?.card?.info}/>)
          }
        </div>

        
    </div>

    )
  }


  if(!IsOpen){
    return(
    <div className='w-full'>
      <div className='flex justify-between w-full'>
        <p className='text-2xl font-bold'>{menuitems?.title}</p>
        <button className='text-2xl mr-20' onClick={()=>SetOpen(!IsOpen)}>{IsOpen?<IoIosArrowUp />:<IoIosArrowDown />}</button>
      </div>  
      <hr className='border-10 text-gray-200' />   
    </div>
    )
    
  }


  return (
    <div className='w-full'>
        <div className='flex justify-between w-full'>
        <p className='text-2xl font-bold'>{menuitems?.title}</p>
        <button className='text-2xl mr-20' onClick={()=>SetOpen(!IsOpen)}>{IsOpen?<IoIosArrowUp />:<IoIosArrowDown />}</button>
        </div>
        <div>
          {
            menuitems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} RestData = {items?.card?.info}/>)
          }
        </div>

        
    </div>

  )
}

export default MenuCard;