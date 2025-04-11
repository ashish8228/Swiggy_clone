import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function Restaurantmenu(){

    const [restmenudata, setrestmenudata] = useState(null);


    useEffect(()=>{
        async function restrofetch() {
            const proxy_url = "https://cors-anywhere.herokuapp.com/";
            const swiggy_api = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch (proxy_url+swiggy_api);
            const data = await response.json();
            setrestmenudata(data);
        }

        restrofetch();
    },[])

    console.log(restmenudata)
    

    return(
        <div>
            <h1>hello coder army</h1>
            
        </div>
    )
}