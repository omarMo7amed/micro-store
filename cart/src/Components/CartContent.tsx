import { useEffect, useState } from "react";

export default function CartContent() {
  const [token, setToken] = useState<string>("");

  return <div>Cart Content this my token{token}</div>;
}
