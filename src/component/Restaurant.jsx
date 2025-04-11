import { useEffect, useState } from "react";
import Restrocard from "./Restrocard";
import Shimmereffect from "./Shimmereffect";



export default function Restaurant(){

    const [Restdata, setrestdata] = useState([])

    useEffect(()=>{
        async  function fetchData (){
            const proxyserver = "https://cors-anywhere.herokuapp.com/";
            const swiggyapi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999& is-seo-homepage-enabled=true";
            const response = await fetch(proxyserver+swiggyapi);
            const data = await response.json();
            setrestdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData();
    }
    ,[])
    
    if(Restdata.length==0){
        return (
            <div className="w-[80%] flex flex-wrap mx-auto mt-20 gap-5 ">
            {[...Array(12)].map((_, index) => (
            <Shimmereffect key={index} />
                )
            )
            }
            </div>

        )
    }

    return(
        <div className="w-[80%] flex flex-wrap mx-auto mt-20 gap-5 ">
            {Restdata.map((data)=><Restrocard key={data?.info?.id} data={data}/>)}
        </div>
    )
}