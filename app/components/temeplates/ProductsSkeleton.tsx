interface ProductsSkeletonProps {
  limit: number;
}

const ProductsSkeleton: React.FC<ProductsSkeletonProps> = ({ limit = 24 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {[...Array(limit)].map((_, index) => (
        <div className="skeleton w-96 h-[452px] mx-auto" key={index}></div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
