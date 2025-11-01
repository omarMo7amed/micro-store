import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";
const API_SERVER = "http://localhost:8000";

export const cart = new BehaviorSubject(null);

export const getCart = async (jwt: any) => {
  const response = await fetch(`${API_SERVER}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Autherization: `Bearer ${jwt.value}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();
  cart.next(data);
  return data;
};

export const addToCart = async (id: number, jwt: any) => {
  const response = await fetch(`${API_SERVER}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Autherization: `Bearer ${jwt.value}`,
    },
    body: JSON.stringify({ product_id: id }),
  });

  if (!response.ok) {
    throw new Error("Failed to add to cart");
  }

  const data = await response.json();
  cart.next(data);
  return data;
};

export const clearCart = async (jwt: any) => {
  const response = await fetch(`${API_SERVER}/cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Autherization: `Bearer ${jwt.value}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to clear cart");
  }

  const data = await response.json();
  cart.next(data);
  return data;
};

export function useCart() {
  const [cartData, setCartData] = useState(cart.value);

  useEffect(() => {
    setCartData(cart.value);
    const subscription = cart.subscribe((c) => {
      setCartData(c);
    });

    return () => subscription.unsubscribe();
  }, []);

  return cartData;
}
