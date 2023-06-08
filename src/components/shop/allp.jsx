import React from "react";
import "./air.scss"
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";

const RelatedProducts = ({ categoryId, productId, innerPage, headingText}) => {
    const { data } = useFetch(
        `/api/products?populate=*`
    );

    return (
        <div className="related-products">
            <h2 className="shop-heading">All products</h2>
            <Products products={data} />
        </div>
    );
};

export default RelatedProducts;
