import React from 'react';
import Product from './Product.js';
// import Footer from './footer.js';

export default function ProductList(props) {
   // console.log(props)
  return (
     props.product1.map((product2,i)=>{
        return <Product product={product2} key={i} increasecount={props.increasecount} decreasecount={props.decreasecount} index={i} removeitem={props.removeitem}/>
        /* <Footer product3={product2} key={i}/> */         
     })
  )
}
 