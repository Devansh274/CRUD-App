import React from "react";

export default function Product(props) {
  // console.log(props)
  return (
    <ul id="product" className="border-top py-3">
      <li className="col-4">
        <h3>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h3>
      </li>
      <li className="col-2">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger" onClick={()=>{props.decreasecount(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick={()=>{props.increasecount(props.index)}}>
            +
          </button>
        </div>
      </li>
      <li className="col-2">
           <span className="badge bg-secondary">₹{props.product.price * props.product.quantity}</span>
      </li>
      <li className="col-2">
          <button className="col-6 btn btn-danger" onClick={()=>{props.removeitem(props.index)}}>
              Remove
          </button>
      </li>
    </ul>
  );
} 
