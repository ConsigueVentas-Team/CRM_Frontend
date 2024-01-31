// hooks/useProducts.js

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export function useProducts() {
  const products = useSelector((state: RootState) => state.products.products);
  return {
    products,
  };
}
