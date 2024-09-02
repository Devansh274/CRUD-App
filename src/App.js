import logo from "./logo.svg"; 
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist.js";
import React, { useState } from "react";
import Footer from "./components/footer.js";
import Additem from "./components/Additem";

function App() {
  const productlist = [
    {
      name: "Iphone Xs",
      price: 99999,
      quantity: 0,
    },
    {
      name: "Samsung s23 ultra",
      price: 69999,
      quantity: 0,
    },
  ];

  let [products, setList] = useState(productlist);
  let [amount, setamount] = useState(0);

  const increasecount = (index) => {
    let newlist = [...products];
    let totalamount = amount;
    newlist[index].quantity++;
    totalamount += newlist[index].price;
    setList(newlist);
    setamount(totalamount);
  };
  const decreasecount = (index) => {
    let newlist = [...products];
    let totalamount = amount;
    if (newlist[index].quantity > 0) {
      newlist[index].quantity--;
      totalamount -= newlist[index].price;
    }
    setList(newlist);
    setamount(totalamount);
  };
  const resetall = () => {
    let newlist = [...products];
    newlist.map((product) => {
      product.quantity = 0;
    });
    setList(newlist);
    setamount(0);
  };
  const removeitem = (index) => {
    let newlist = [...products];
    let totalamount = amount;
    totalamount -= newlist[index].quantity * newlist[index].price;
    newlist.splice(index, 1);
    setamount(totalamount);
    setList(newlist);
  };
  const finditem = (name) => {
    let newlist = [...products];
    newlist.filter((e) => e.name === name);
    setList(newlist);
  };
  const additem = (name, price) => {
    let newlist = [...products];
    if (name.length === 0 || price === 0) {
      alert("Enter a valid product Name and Price!");
    } else {
      if (newlist.some((e) => e.name === name)) {
        alert("Item already added to the cart!");
      } else {
        newlist.push({
          name: name,
          price: price,
          quantity: 0,
        });
        setList(newlist);
      }
    }
    document.getElementById('name').value = "";
    document.getElementById('price').value = "";
  };

  return (
    <>
      <Navbar product={products} finditem={finditem}/>
      <main className="container mt-3">
        <Additem additem={additem} origlist={products} />
      </main>
      <main className="container my-3">
        <ProductList
          product1={products}
          increasecount={increasecount}
          decreasecount={decreasecount}
          removeitem={removeitem}
        />
      </main>
      <Footer amount={amount} resetall={resetall} />
    </>
  );
}

export default App;
