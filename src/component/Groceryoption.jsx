import { Grocerygridcards } from "../utils/Grocery"
import Grocerycard from "./Grocerycard"


export default function Groceryoption(){


    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-4">
            {
                Grocerygridcards.map((fooddata)=><Grocerycard key={fooddata.id} fooddata ={fooddata}></Grocerycard>)
            }
            </div>
        </div>
    )
}