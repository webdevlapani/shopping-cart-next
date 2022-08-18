import { Box, Typography, Avatar, Stack, Chip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import Button from "../Button";
import { useStyle } from "./useStyle";

const ProductItem = ({
  image,
  name,
  tag,
  price,
  sellingPrice,
  productId,
  isSale,
}) => {
  const { wrapper, imageContainer, saleBadge, productDetails, priceStyle } =
    useStyle();

  const dispatch = useDispatch();
  const router = useRouter();

  const products = useSelector((state) => state.products.products);

  const onAddProduct = (e, id) => {
    e.stopPropagation();
    const filteredProduct = products.filter((ele) => ele.id === id);

    const item = {
      id: filteredProduct[0].id,
      productName: filteredProduct[0].name,
      productImg: filteredProduct[0].imagePath,
      productPrice: filteredProduct[0].sellingPrice,
      qty: 1,
    };

    dispatch(addToCart(item));
    router.push("/cart");
  };

  const onProductHandler = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <Box sx={wrapper} onClick={(e) => onProductHandler(productId)}>
      {isSale && <Avatar sx={saleBadge}>Sale</Avatar>}
      <Stack alignItems="center" sx={imageContainer}>
        <Image
          src={image}
          layout="fixed"
          width={166}
          height={436}
          alt="product item"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={(e) => onAddProduct(e, productId)}
        >
          Add to Cart
        </Button>
      </Stack>
      <Stack alignItems="center" sx={productDetails}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">
          {tag.map((ele, index) =>
            tag.length - 1 != index ? ele.name + ", " : ele.name
          )}
        </Typography>
        <Stack direction="row">
          <Chip label={"$" + sellingPrice} color="primary" />
          {isSale && <Chip label={"$" + price} sx={priceStyle} />}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductItem;
