import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useStyle } from "./useStyle";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../../../components/ProductItem";
import { bestMatchProduct } from "../../../../store/ProductsSlice";

const BestProduct = ({ product, products }) => {
  const { main, innerContainer } = useStyle();
  const dispatch = useDispatch();

  const bestMatchProductData = useSelector(
    (state) => state.products.filteredProducts
  );
  useEffect(() => {
    if (product) {
      dispatch(bestMatchProduct(product));
    }
  }, [product, dispatch]);
  return (
    <>
      <Container sx={main}>
        <Box sx={innerContainer}>
          {bestMatchProductData?.map((ele) => (
            <Grid key={ele.id} item md={4}>
              <ProductItem
                image={ele.imagePath}
                name={ele.name}
                tag={ele.tags}
                price={ele.price}
                sellingPrice={ele.sellingPrice}
                productId={ele.id}
                quantity={ele.qty}
              />
            </Grid>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default BestProduct;
