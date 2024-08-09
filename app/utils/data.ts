import { Product } from "../types";

interface FetchProductsResponse {
  total: number;
  products: Product[];
}

interface FetchProductsParams {
  currentPage?: number;
  limit?: number;
}

const baseURL = "https://dummyjson.com/products";

export const fetchProducts = async ({
  currentPage = 1,
  limit = 24,
}: FetchProductsParams): Promise<FetchProductsResponse> => {
  const skip = (currentPage - 1) * limit;

  const res = await fetch(
    `${baseURL}?limit=${limit}&skip=${skip}&select=title,tags,description,thumbnail`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: FetchProductsResponse = await res.json();

  return data;
};
