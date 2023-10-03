
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.category}
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {product.brand}
        </span>
      </div>
      <div className="px-6 py-4">
        <span className="text-gray-700 text-base font-semibold">Price: {product.price}</span>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
