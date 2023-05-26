import React, {useContext} from "react"
import  {ProductContext} from '../Global/ProductContext'
import Banner from './Banner';

const Products=()=>{
    const {product} = useContext( ProductContext);
    
   return(
    <>
    <div className="container">

    <Banner/>
    <div className="Product">
       {product.map((product) => (
        
          
               <div className="product" key={product.id}>
              
               <div className="product-image" >
               <img src={product.Image} alt="Not Found" />

               </div>
               <div className="product-detail">
                   <div className="product-name">
                       {product.name}
                   </div>
                   <div className="product-price">
                       Rs{product.price}.00
                   </div>
                   <button className="add-cart"> 
                     Add To Cart 
                   </button>
                 {product.Status === 'hot' ? <div className="hot">Hot</div> :''}
                 {product.Status === 'new' ? <div className="new">New</div> :''}
               
               </div>

               </div>
        

           ))}
       
           </div>
           </div>
       
   </>
)
}

export default Products;
