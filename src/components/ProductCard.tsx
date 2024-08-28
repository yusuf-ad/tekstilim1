import { Product } from "../lib/types";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-span-1">
      <div className="mb-4 h-80 bg-gray-200"></div>

      <div>
        <h3 className="mb-1 text-xl font-medium">{product.title} </h3>
        <p className="mb-2 font-medium text-primary-700">{product.model}</p>

        <div>
          <span className="text-lg font-medium">₺ {product.price} </span>
          <span className="ml-2 font-medium text-gray-500 line-through">
            ₺ {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
