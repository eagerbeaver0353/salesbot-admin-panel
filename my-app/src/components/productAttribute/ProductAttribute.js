import ProductList from "../productList/ProductList";
import ProductData from "../data.json";
const ProductAttribute = () => {
  return (
    <>
      <ProductList attributes={ProductData} />
    </>
  );
};
export default ProductAttribute;
