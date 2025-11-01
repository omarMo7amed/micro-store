import { useEffect, useState } from "react";
import { getProducts } from "../products";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  offer?: string;
};

export default function Home() {
  const [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchProducts = async () => setProducts(await getProducts());
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
        {products.map((product: Product) => (
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
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <h2 style={{ fontSize: "1.5rem", color: "#555", margin: "10px 0" }}>
              {product.name}
            </h2>
            <p style={{ fontSize: "1rem", color: "#777", margin: "10px 0" }}>
              {product.description}
            </p>
            {product.offer && (
              <p
                style={{ fontSize: "1rem", color: "#d32f2f", margin: "10px 0" }}
              >
                Special Offer: {product.offer}
              </p>
            )}
            <strong style={{ fontSize: "1.2rem", color: "#000" }}>
              ${product.price}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}
