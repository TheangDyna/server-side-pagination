import Pagination from "../components/Pagination";
import ProductList from "../components/ProductsList";
import { Suspense } from "react";
import ProductsSkeleton from "../components/ProductsSkeleton";

const Products: React.FC = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const currentPage = searchParams?.page || 1;
  const limit = 24;

  return (
    <Suspense key={currentPage} fallback={<ProductsSkeleton limit={limit} />}>
      <ProductList currentPage={currentPage} limit={limit} />
    </Suspense>
  );
};
export default Products;
