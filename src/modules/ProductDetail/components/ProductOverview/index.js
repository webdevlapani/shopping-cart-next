import {
  useTheme,
  useMediaQuery,
  Container,
  Typography,
  Input,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import React, { useState } from "react";
import { useStyle } from "./useStyle";
import Button from "../../../../components/Button";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/CartSlice";

const ProductOverview = ({ product }) => {
  const router = useRouter();
  const {
    main,
    overviewContainer,
    imageContainer,
    overviewDetail,
    productTitle,
    productDetail,
    priceContainer,
    price,
    discount,
    addToCartContainer,
    quantity,
    addtocartbtn,
    SKU,
    category,
    tags,
    quantityBtn,
    separator,
  } = useStyle();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));

  const [quantityCount, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    if (quantityCount >= 1) {
      const item = {
        id: product.id,
        productName: product.name,
        productPrice: product.sellingPrice,
        productImg: product.imagePath,
        qty: quantityCount,
      };

      dispatch(addToCart(item));
      router.push("/cart");
    } else {
      alert("Invalid Quantity");
    }
  };

  return (
    <>
      <Container sx={main}>
        <Stack direction={!matchMD ? "row" : "column"} sx={overviewContainer}>
          <Box>
            <Box sx={imageContainer}>
              <Image
                src={product?.imagePath}
                alt="product detail"
                layout="fixed"
                width={166}
                height={436}
              ></Image>
            </Box>
          </Box>
          <Box sx={overviewDetail}>
            <Box sx={productTitle}>
              <Typography variant="h5">{product?.name}</Typography>
            </Box>
            <Stack sx={priceContainer} direction="row">
              <Box sx={price}>${product?.sellingPrice.toFixed(2)}</Box>
              <Box sx={discount}>
                <del>${product?.price.toFixed(2)}</del>
              </Box>
            </Stack>
            <Box sx={productDetail}>
              <Typography variant="body1">{product?.discription}</Typography>
            </Box>
            <Box sx={addToCartContainer}>
              <Input
                defaultValue="0"
                sx={quantity}
                value={quantityCount}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Box sx={quantityBtn}>
                <KeyboardArrowUpIcon
                  onClick={() => setQuantity((state) => state + 1)}
                />
                <Box sx={separator}></Box>
                <KeyboardArrowDownIcon
                  onClick={() =>
                    setQuantity((state) => (quantityCount > 1 ? state - 1 : 1))
                  }
                />
              </Box>
              <Button
                variant="outlined"
                sx={addtocartbtn}
                color="info"
                onClick={onAddToCart}
              >
                Add To Cart
              </Button>
            </Box>
            <Box sx={SKU}>
              <Typography variant="body1">
                <b>SKU : </b> {product?.SKU}
              </Typography>
            </Box>
            <Box sx={category}>
              <Typography variant="body1">
                <b>CATEGORIES : </b>{" "}
                {product?.category?.map((ele, index) =>
                  product?.category?.length - 1 != index
                    ? ele.name + ", "
                    : ele.name
                )}
              </Typography>
            </Box>
            <Box sx={tags}>
              <Typography variant="body1">
                <b>TAGS : </b>{" "}
                {product?.tags?.map((ele, index) =>
                  product?.tags?.length - 1 != index
                    ? ele.name + ", "
                    : ele.name
                )}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ProductOverview;
