import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  async function getProducts() {
    const response = await fetch("http://localhost:3000/products");
    return await response.json();
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={() => setSearch(event.target.value)}
      />

      {products
        .filter((product) =>
          `${product.name} ${product.category}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h2>{product.name}</h2>
            <p> {product.category}</p>
            <p>${product.price}</p>
          </div>
        ))}
    </>
  );
}

export default App;
