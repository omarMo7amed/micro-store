import { useEffect, useState } from "react";
import { getProducts } from "../products";
import { addToCart } from "cart/cart";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Home() {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontSize: "2.5rem",
          color: "#333",
        }}
      >
        Explore Our Exclusive Product Collection
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              width: "250px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <a href={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }}
              />
            </a>
            <h2 style={{ fontSize: "1.5rem", color: "#555", margin: "10px 0" }}>
              {product.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "#777", margin: "10px 0" }}>
              {product.description}
            </p>
            <strong style={{ fontSize: "1.2rem", color: "#000" }}>
              ${product.price}
            </strong>
            <button
              onClick={async () => await addToCart(product.id)}
              style={{
                marginTop: "15px",
                marginLeft: "15px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
