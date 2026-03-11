import React, { useEffect, useState } from "react";
import "./Products.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  const { addToCart } = useContext(CartContext);

  const categories = [
    "women's clothing",
    "electronics",
    "jewelery",
    "men's clothing"
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : `https://fakestoreapi.com/products`;

        const res = await fetch(url);
        const products = await res.json();

        setData(products);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category]);

  const sortLowToHigh = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price);
    setData(sorted);
  };

  if (loading) {
    return <h2 className="loading">Loading Products...</h2>;
  }

  return (
    <div>

      <h1 className="title">Products</h1>

      <ul className="category-bar">
        <li onClick={() => setCategory("")}>All</li>
        <li onClick={sortHighToLow}>Price ↓</li>
        <li onClick={sortLowToHigh}>Price ↑</li>

        {categories.map((each) => (
          <li
            key={each}
            className={category === each ? "active" : ""}
            onClick={() => setCategory(each)}
          >
            {each}
          </li>
        ))}
      </ul>

      <div className="products-container">
        {data.map((each) => (
          <div key={each.id} className="product-card">
            <img src={each.image} alt={each.title} />

            <h3>{each.title}</h3>

            <p className="description">
              {each.description.slice(0, 50)}...
            </p>

            <p className="price">${each.price}</p>

            <p className="category">{each.category}</p>

            <p className="rating">
              ⭐ {each.rating.rate} ({each.rating.count})
            </p>

          <button onClick={() => addToCart(each)}>
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;