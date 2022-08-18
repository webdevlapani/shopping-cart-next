import { Container, Grid, Stack, Typography } from "@mui/material";
import SubHeader from "../../components/SubHeader";
import { useStyle } from "./useStyle";
import { COLOR } from "../../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { onSortChange } from "../../store/ProductsSlice";
import ProductList from "./components/ProductList/ProductList";
import Filter from "./components/Filter/Filter";

const ProductModule = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const { wrapper, productHeader } = useStyle();

  const handleChange = (event) => {
    if (event.target.value === "1") {
      dispatch(onSortChange(false));
    } else {
      dispatch(onSortChange(true));
    }
  };

  return (
    <>
      <SubHeader pagename="surfing" />
      <Container maxWidth="xl" sx={wrapper}>
        <Grid container columnSpacing={20}>
          <Grid item lg={8}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={productHeader}
            >
              <Typography variant="body2">{`Showing 1–${
                filteredProducts.length
                  ? filteredProducts.length
                  : products.length
              } of ${products.length} results`}</Typography>
              <select
                onChange={handleChange}
                style={{
                  border: 0,
                  color: COLOR.grey,
                  fontFamily: ["Open-sans"].join(),
                }}
              >
                <option>Default sorting</option>
                <option value={1}>High to Low</option>
                <option value={2}>Low to High</option>
              </select>
            </Stack>
            <Grid container rowSpacing={30} columnSpacing={20}>
              <ProductList
                products={filteredProducts.length ? filteredProducts : products}
              />
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Filter />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductModule;
