import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function AddProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stockCount, setStockCount] = useState("");

    const navigate = useNavigate();

    async function handleAddProduct(event) {
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
        <Grid item xs={12} md={8}>
            <Typography sx={{ mb: 3 }} variant="h2" component="h1">
                Add new product
            </Typography>

            <form
                onSubmit={handleAddProduct}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                }}
            >
                <div>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        variant="filled"
                        fullWidth
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        variant="filled"
                        fullWidth
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="price"
                        name="price"
                        label="Price"
                        variant="filled"
                        fullWidth
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        type="number"
                    />
                </div>
                <div>
                    <TextField
                        id="stockCount"
                        name="stockCount"
                        label="Stock count"
                        variant="filled"
                        fullWidth
                        value={stockCount}
                        onChange={(event) => setStockCount(event.target.value)}
                        type="number"
                    />
                </div>

                <Button
                    sx={{ alignSelf: "flex-end" }}
                    type="submit"
                    variant="contained"
                >
                    Add product
                </Button>
            </form>
        </Grid>
    );
}

export default AddProduct;
