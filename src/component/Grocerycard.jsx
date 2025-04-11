

export default function Grocerycard({fooddata}){
    return(
        <div className="flex-none">
            <a href={fooddata?.action?.link}>
            <img className="w-40 h-50 object-cover gap-6" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+fooddata?.imageId}/>
            </a>
            <h2 className="text-center font-bold">{fooddata?.action?.text}</h2>
        </div>
    )
}