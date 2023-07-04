import { useEffect, useState } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        getData(controller.signal).then((data) => setProducts(data));

        getData().then((data) => setProducts(data));

        return () => {
            controller.abort();
        };
    }, []);

    function getData(signal) {
        return fetch("http://localhost:3000/products", { signal }).then(
            (response) => response.json()
        );
    }

    return (
        <>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        border: "1px solid black",
                        padding: 10,
                        margin: 10,
                    }}
                >
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </>
    );
}

export default Products;
