import React from "react";
import { useRouter } from "next/router";
import ProductDetail from "../../modules/ProductDetail";
import SubHeader from "../../components/SubHeader";
import { selectProductById } from "../../store/ProductsSlice";
import { useSelector, useDispatch } from "react-redux";


const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const product = useSelector((state) => selectProductById(state, Number(id)));

    return (
        <>
            <SubHeader pagename={product?.name} />
            <ProductDetail id={id} product={product} />
        </>
    );
};

export default ProductDetails;
