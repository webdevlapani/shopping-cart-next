import ProductItem from "../../../../components/ProductItem";
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((ele) => (
        <Grid key={ele.id} item md={4}>
          <ProductItem
            image={ele.imagePath}
            name={ele.name}
            tag={ele.tags}
            price={ele.price}
            sellingPrice={ele.sellingPrice}
            productId={ele.id}
            isSale={ele.isSale}
          />
        </Grid>
      ))}
    </>
  );
};

export default ProductList;
