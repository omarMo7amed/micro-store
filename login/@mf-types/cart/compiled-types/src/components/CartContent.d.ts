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
export default function CartContent(): import("react/jsx-runtime").JSX.Element;
