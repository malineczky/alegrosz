import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stockCount, setStockCount] = useState("");

    const navigate = useNavigate();

    async function hanldeAddProduct(event) {
        // async dodany później, żeby zrobić navigate, czyli po naciśnięciu buttona przekirowuje bezposednio na stronę tego produktu
        //wywołuje się na submit
        event.preventDefault(); // służy do wyłączenia  ntyawnej obslugi zdarzenia, czyli blokuje obsluge submit przeglądarki, bo normalnie by to wysłała
        const product = await addProduct({
            name: name,
            description: description,
            price: price,
            stockCount: stockCount, // jeśli klucz ma nazwę taką samą jak zmienna która bedzie wartością, to można byłoby zapisać tylko {name, description, price, stockCount}
        });

        navigate(`/product/${product.id}`);
    }

    async function addProduct(data) {
        // to jest funkcja to wysyłania danych
        //data czyli co ma dodać
        const response = await fetch("http://localhost:3000/products", {
            method: "post", //metoda get jest domyśla wiec zmieniamy, bo chcemy teraz te dane wysłać
            body: JSON.stringify(data), //body służy do wysyłania danych, JSON konwertuje z obiektu na tekst
            headers: {
                // to są nagłówki; podajemy nagłówek jaki typ danych wysyłamy
                "Content-Type": "application/json",
            }, // to są nagłówki
        });

        return response.json();
    }

    return (
        <>
            <div>
                <h1>Add new product</h1>
                <form onSubmit={hanldeAddProduct}>
                    <div>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="stockCount">Stock count</label>
                        <input
                            type="number"
                            name="stockCount"
                            id="stockCount"
                            value={stockCount}
                            onChange={(event) =>
                                setStockCount(event.target.value)
                            }
                        />
                    </div>
                    <button type="submit">Add product</button>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
