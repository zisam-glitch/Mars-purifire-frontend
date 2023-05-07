import React from "react";
import "./air.scss"
import useFetch from "../../hooks/useFetch";
import Products from "../../components/Products/Products";

const RelatedProducts = ({ categoryId, productId, innerPage, headingText}) => {
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${1}`
    );

    return (
        <div className="related-products">
            <h2 className="shop-heading">Shop</h2>
            <Products products={data} />
        </div>
    );
};

export default RelatedProducts;
