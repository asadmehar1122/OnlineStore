import React, {createContext,useState} from "react"
import Dslr from "../pictures/Dslr.jpg"
import Headphone from "../pictures/Headphone.jpg"
import Microphone from "../pictures/Microphone.jpg"
import Ring from "../pictures/Ring.jpg"
import Shoes from "../pictures/Shoes.jpg"
import watch from "../pictures/watch.jpg"


export const ProductContext = createContext();

const ProductContextProvider =(props)=>{
    const [product] = useState([
        {id: 1, name:'Dslr', price:3000, Image:Dslr, Status:'new' },
        {id: 2, name:'Head Phones', price:600, Image:Headphone, Status:'hot' },
        {id: 3, name:'Micro Phone', price:30000, Image:Microphone, Status:'new' },
        {id: 4, name:'Ring', price:1000, Image:Ring, Status:'hot' },
        {id: 5, name:'Shoes', price:2800, Image:Shoes, Status:'new' },
        {id: 6, name:'Watch', price:1900, Image:watch, Status:'new' }

    ]);
    return(
        <ProductContext.Provider value={{product: [...product]}}>
             {props.children}
        </ProductContext.Provider>


    )

}
export default  ProductContextProvider;
