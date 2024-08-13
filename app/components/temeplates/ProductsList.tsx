import Link from "next/link";
import { getAllProducts } from "../../utils";
import ProductCard from "../molecules/ProductCard";
import Pagination from "../molecules/Pagination";

interface ProductListProps {
  currentPage: number;
  limit: number;
}

const ProductList: React.FC<ProductListProps> = async ({
  currentPage,
  limit,
}) => {
  const { products, total } = await getAllProducts({ currentPage, limit });

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((item, index) => (
          <div key={index} className="mx-auto">
            <Link href={`products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination total={total} limit={limit} />
      </div>
    </div>
  );
};

export default ProductList;
