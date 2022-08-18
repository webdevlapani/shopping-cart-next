import { useSelector } from "react-redux";
import BestProduct from "./components/BestProduct";
import MoreDetails from "./components/MoreDetails";
import ProductOverview from "./components/ProductOverview";

const ProductDetail = ({ product }) => {
  const products = useSelector((state) => state.products.products);
  return (
    <>
      <ProductOverview product={product} />
      <MoreDetails product={product} />
      <BestProduct product={product} products={products} />
    </>
  );
};

export default ProductDetail;
