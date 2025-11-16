import { jwt } from "x/auth";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8000";

export const cart = new BehaviorSubject(null);
export const cartChannel = new BroadcastChannel("cart-channel");

export const notifyCartChange = (message: any) => {
  cartChannel.postMessage(message);
};

export const listenCartChange = (
  callback: (message: { event: string; data: any }) => void
) => {
  cartChannel.onmessage = (e) => {
    callback(e.data);
  };
};

export const getCart = async () => {
  const token = jwt.value;

  if (!token) {
    throw new Error("No authentication token found");
  }

  const response = await fetch(`${API_SERVER}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();
  cart.next(data.cartItems);
  return data.cartItems;
};

export const addToCart = async (id: number) => {
  const token = jwt.value;

  if (!token) {
    throw new Error("No authentication token found");
  }

  const response = await fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id.toString() }),
  });

  if (!response.ok) {
    throw new Error("Failed to add to cart");
  }

  const data = await response.json();
  cart.next(data.cartItems);

  notifyCartChange({ event: "item_added", data: data.cartItems });

  return data.cartItems;
};
