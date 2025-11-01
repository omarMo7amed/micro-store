import { useEffect, useState } from "react";
// import { cart } from "../hooks/cart";
const itemss = [
  { id: 1, name: "Product A", price: 29.99, quantity: 2 },
  { id: 2, name: "Product B", price: 49.99, quantity: 1 },
  { id: 3, name: "Product C", price: 19.99, quantity: 3 },
];
export default function MiniCart() {
  const [items, setItems] = useState(itemss);

  // useEffect(() => {
  //   // Initialize and subscribe to cart updates
  //   setItems(itemss);
  // }, []);

  if (!items) return null;

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <h3 className="font-semibold mb-3 text-gray-800">Your Cart</h3>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li
              key={item.id}
              className="py-2 flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <span className="text-sm font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="border-t mt-3 pt-3 flex justify-between items-center">
          <span className="font-semibold text-sm text-gray-800">Total:</span>
          <span className="font-bold text-gray-900">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}
