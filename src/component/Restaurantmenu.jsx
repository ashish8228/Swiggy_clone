import { use, useEffect, useState } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";
import { MdOutlineSearch } from "react-icons/md";
import { Link } from "react-router";


export default function Restaurantmenu(){

    let{id} =  useParams();
    console.log(id);

    const [restmenudata, setrestmenudata] = useState([]);
    const [selectfood, setselectfood] = useState(null)  


    useEffect(()=>{
        async function restrofetch() {
            const proxy_url = "https://cors-anywhere.herokuapp.com/";
            const swiggy_api = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10208`;
            const response = await fetch (proxy_url+swiggy_api);
            const data = await response.json();

            const tempdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterdata = tempdata.filter((items)=>'title' in items?.card?.card)

            setrestmenudata(filterdata);                   
        }
        restrofetch();
    },[])

    

    return(
        <div className="w-[80%] mx-auto mt-7">
            <Link to={`/city/delhi/${id}/search`}>
                <div className="flex justify-between text-2xl py-2 px-5 cursor-pointer bg-gray-300 rounded text-center">
                    <p>Search For Dishes</p>
                    <MdOutlineSearch className="mt-1"/>
                </div>
            </Link>
            <div className="mt-10 mb-15 gap-5 flex">
                <button className={`w-25 border p-3 text-2xl rounded-2xl cursor-pointer shadow-xl/30 shadow-black ${selectfood==="veg"?"bg-green-600 text-white border-none":"bg-white"}`} onClick={()=>setselectfood(selectfood==="veg"?null:"veg")}>Veg</button>

                <button className={` w-30 border p-3 text-2xl rounded-2xl cursor-pointer shadow-xl/30 shadow-black ${selectfood==="nonveg"?"bg-red-400 text-white border-none":"bg-white"}`} onClick={()=>setselectfood(selectfood==="nonveg"?null:"nonveg")}>Nonveg</button>
            </div>
            {
                restmenudata.map((Menuitems)=><MenuCard key={Menuitems?.card?.card?.title} menuitems={Menuitems?.card?.card} selectfood={selectfood}/>)
            }           
        </div>
    )
}