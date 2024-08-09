import { fetchProducts } from "../utils";
import ProductCard from "./ProductCard";

interface ProductListProps {
  currentPage?: number;
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = async ({
  currentPage,
  limit,
}) => {
  const { products } = await fetchProducts({ currentPage, limit });
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((item, index) => (
        <div key={index} className="mx-auto">
          <ProductCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
