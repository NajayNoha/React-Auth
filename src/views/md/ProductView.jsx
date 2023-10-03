import { categoryPros } from '../../api/products';
import ProductSlider from './ProductSlider';


const productsCategory1 = await categoryPros('jewelery')
const productsCategory2 = await categoryPros('jewelery')
const productsCategory3 = await categoryPros('jewelery')


const ProductView = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Product Categories</h1>

      {/* Category 1 */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category 1</h2>
        <ProductSlider products={productsCategory1} />
      </div>

      {/* Category 2 */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category 2</h2>
        <ProductSlider products={productsCategory2} />
        {/* Display products for Category 2 here */}
      </div>

      {/* Category 3 with Slider */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Category 3</h2>
        <ProductSlider products={productsCategory3} />
      </div>
    </div>
  );
};

export default ProductView;
