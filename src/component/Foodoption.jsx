import { ImageGridCards } from "../utils/fooddata"
import Foodcard from "./Foodcard"

export default function Foodoption(){
    return(
        <>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20">
                {
                    ImageGridCards.map((fooddata)=><Foodcard key={fooddata.id} fooddata ={fooddata}></Foodcard>)
                }

            </div>
        </>
    )
}