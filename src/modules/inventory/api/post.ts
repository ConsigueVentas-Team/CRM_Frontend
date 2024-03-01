import api from "@/services/api";
import { Product } from "@/types/product";

export const createNewProduct = async (values: Product): Promise<Product> => {
  const { data } = await api.post("/products/create", values);
  return data;
};
export const getPosts = async (currentPage: number) => {
  const { data } = await api.get(`/products?page=${currentPage}`);
  return data;
};
