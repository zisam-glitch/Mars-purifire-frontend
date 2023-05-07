import React from "react";
import useFetch from "../../hooks/useFetch";
import Products from "./Products/Products";
import "./gift.scss"

const RelatedProducts = ({ categoryId, productId, innerPage, headingText }) => {
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${3}`
    );

    return (
        <div className="gift">
            {!innerPage && <div className="sec-heading1">{headingText}</div>}
            <div className={`products1 ${innerPage ? "innerPage" : ""}`}>
            <Products products={data} />
        </div>
        </div>

    );
};

export default RelatedProducts;
