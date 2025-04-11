import Dineoption from "./Dineoptions";
import Foodoption from "./foodoption";
import Groceryoption from "./Groceryoption";
import Header from "./header";


export default function Home(){
    return(
        <>
            <Header></Header>
            <Foodoption></Foodoption>
            <Groceryoption></Groceryoption>
            <Dineoption></Dineoption>
        </>
    )
}