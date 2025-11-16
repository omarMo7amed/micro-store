import { useEffect, useState } from "react";
import { cart, getCart, listenCartChange } from "../hooks/cart";

export default function MiniCart() {
  const [items, setItems] = useState<
    { id: string; name: string; price: number; quantity: number }[]
  >(cart.value || []);

  useEffect(() => {
    async function loadCart() {
      const res = await getCart();
      setItems(res);
    }
    loadCart();

    listenCartChange((message) => setItems(message.data));

    const subscription = cart.subscribe((c) => {
      if (c) setItems(c);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!items) return null;

  const totalPrice =
    items?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        marginTop: "12px",
        width: "320px",
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        padding: "20px",
        zIndex: 50,
      }}
    >
      {/* Header */}
      <div
        style={{
          paddingBottom: "12px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "#111827",
            margin: 0,
          }}
        >
          Shopping Cart
        </h3>
      </div>

      {/* Empty */}
      {items.length === 0 ? (
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            padding: "24px 0",
            textAlign: "center",
          }}
        >
          Your cart is empty.
        </p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            marginTop: "14px",
            maxHeight: "220px",
            overflowY: "auto",
          }}
        >
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "14px 0",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    margin: "3px 0 0 0",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>

              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1f2937",
                }}
              >
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      {items.length > 0 && (
        <div
          style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: "16px",
            paddingTop: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151",
            }}
          >
            Total:
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}
