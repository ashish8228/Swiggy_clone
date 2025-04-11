import { Link } from "react-router"

 export default function Restrocard({data}){
    return(
        <Link to={"/city/delhi/"+data?.cards?.card?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95 ">
            <img className="h-45 w-70 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data.info.cloudinaryImageId}/>
            <div className="max-w-[95%] mx-auto mt-3">
                <div className="font-bold text-5 h-6 overflow-hidden">{data?.info?.name}</div>
                <div className="text-4 flex items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-5 h-5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L17.18 22 12 18.56 6.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>

                    <span className="font-semibold">{data?.info?.avgRating}</span>
                    <span className="font-bold ml-2 ">{data?.info?.sla?.slaString}</span>
                </div>
                <div className="text-gray-500 h-6 overflow-hidden ">{data?.info?.cuisines.join(" ")}</div>
                <div className="text-gray-500">{data?.info?.areaName}</div>
            </div>
        </div>
        </Link>
    )
}