

export default function Dinecard({demodata}){
    return(
        <div className=" border-l border-r border-b border-gray-200 rounded-2xl pb-5 max-w-sm flex-none">
            <a href={demodata.cta.link}>
            <div className="relative ">
                <img className="w-82 h-50 rounded-2xl inset-x-0 bottom-0 shadow-inner" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+demodata?.info?.mediaFiles[0]?.url} />
                <div className=" absolute bottom-0 right-0 left-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                <p className="  font-bold text-white absolute left-3 bottom-3 z-10">{demodata?.info?.name}</p>
                <p className=" font-bold text-white absolute right-3 bottom-3 z-10">{demodata?.info?.rating?.value}</p>
            </div>

                <div className="flex justify-between container w-[95%] mx-auto">
                    <p>{demodata?.info?.cuisines}</p>
                    <p>{demodata?.info?.costForTwo}</p>
                </div>

                <div className="flex justify-between container w-[95%] mx-auto">
                    <p>{demodata?.info?.locationInfo?.formattedAddress}</p>
                    <p>{demodata?.info?.locationInfo?.distanceString}</p>
                </div>

            </a>
        </div>
    )
}