import React, { useState, useEffect } from "react";
import axios from "axios";

const NewOrderDialog = () => {
  const [open, setOpen] = useState(false);
  const [productname, setproductname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [customerName, setcustomerName] = useState("");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
      .then((products) => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/order", {
        customerName,
        products,
      });
      alert("new order Created");
    } catch (error) {
      console.error("Error submitting form", error);
    }

    // Close the dialog box
    handleClose();
    window.location.reload();
  };

  const handleSelectChange = async (event) => {
    const value = event.target.value;
    setproductname(value);

    const selectedProduct = products.find(
      (product) => product.productname === value
    );

    if (selectedProduct) {
      setPrice(selectedProduct.price);
    }
  };

  return (
    <div>
      <button
        className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen}
      >
        Create New Order
      </button>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="block text-gray-700 text-2xl font-bold mb-4">
              Order Details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="customerName"
                >
                  Customer Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="customerName"
                  type="text"
                  value={customerName}
                  onChange={(e) => setcustomerName(e.target.value)}
                  required
                />
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="productname"
                >
                  Product Name
                </label>
                <select
                  onChange={handleSelectChange}
                  className="h-10 bg-indigo-500 rounded p-2 mb-2"
                >
                  <option key="selectone">Select One</option>
                  {products.map((product) => {
                    return (
                      <option key={product._id} value={product.productname}>
                        {product.productname}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="productname"
                  type="text"
                  value={productname}
                  onChange={(e) => setproductname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button
                  className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewOrderDialog;
