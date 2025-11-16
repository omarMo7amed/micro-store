import { useEffect, useState, useCallback } from "react";
import { addToCart, getCart, listenCartChange } from "../hooks/cart";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  longDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

function CartItemRow({
  item,
  onChangeQuantity,
}: {
  item: CartItem;
  onChangeQuantity: (id: number, q: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <img
        src={item.imageUrl}
        alt={item.name}
        style={{ width: 70, height: 70, borderRadius: 8, marginRight: 16 }}
      />

      <div style={{ flexGrow: 1 }}>
        <h4 style={{ margin: 0, fontSize: 16 }}>{item.name}</h4>
        <p style={{ margin: "4px 0", fontSize: 14, color: "#555" }}>
          {item.description}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
        <button
          onClick={() => onChangeQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          style={{
            padding: "4px 10px",
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <span style={{ margin: "0 10px", width: 24, textAlign: "center" }}>
          {item.quantity}
        </span>

        <button
          onClick={() => onChangeQuantity(item.id, item.quantity + 1)}
          style={{
            padding: "4px 10px",
            border: "1px solid #ccc",
            borderRadius: 6,
            background: "#f5f5f5",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <strong style={{ fontSize: 16 }}>
        ${(item.price * item.quantity).toFixed(2)}
      </strong>
    </div>
  );
}

export default function CartContent() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCart = useCallback(async () => {
    setLoading(true);
    try {
      const items = await getCart();
      setCart(items || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCart();
    listenCartChange((message) => setCart(message.data));
  }, [loadCart]);

  const handleQuantityChange = async (
    productId: number,
    newQuantity: number
  ) => {
    if (newQuantity < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );

    try {
      await addToCart(productId);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading cart...</p>;

  return (
    <div style={{ padding: 20, minHeight: "100vh" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItemRow
            key={item.id}
            item={item}
            onChangeQuantity={handleQuantityChange}
          />
        ))
      )}

      {cart.length > 0 && (
        <div style={{ marginTop: 20, textAlign: "right", fontSize: 18 }}>
          <strong>
            Total: $
            {cart
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </strong>
        </div>
      )}
    </div>
  );
}
