import React from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../../Products/Products";
import "./RelatedProducts.scss"

const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=3`
    );

    return (
        <div className="related-products">
            <h1 className="rttl">Related Products</h1>
            <Products products={data} />
        </div>
    );
};

export default RelatedProducts;
