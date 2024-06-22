import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.productname}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
