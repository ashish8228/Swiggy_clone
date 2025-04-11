import { dineoutRestaurants } from "../utils/Dineoutdata";
import Dinecard from "./Dinecard";


export default function Dineoption(){
    return(
        <div className="w-[80%] mx-auto mt-30">
            <p className="font-bold text-2xl">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5">
                {dineoutRestaurants.map((RestData)=><Dinecard key={RestData.info.id} demodata={RestData}></Dinecard>)}
            </div>
        </div>
    )
}