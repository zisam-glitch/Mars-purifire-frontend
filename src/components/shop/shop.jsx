import React, { useEffect, useContext } from "react";
import "./shop.scss";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { Helmet } from 'react-helmet';

const Shop = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            setProducts(res);
        });
    };

    return (
        <div>
            <div className="main-content">
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="profile" href="https://gmpg.org/xfn/11" />
                    <title>Shop Online</title>
                    <meta name="description" content="Marspurifier is the brand who provide you the best quality purifiers, if you interested then visit the shop for purchasing." />
                    <link rel="canonical" href="https://marspurifier.com/shop/" />
                    <meta property="og:locale" content="en_GB" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Shop Online" />
                    <meta property="og:description" content="Marspurifier is the brand who provide you the best quality purifiers, if you interested then visit the shop for purchasing." />
                    <meta property="og:url" content="https://marspurifier.com/shop/" />
                    <meta property="og:site_name" content="Dental Air Purification - Accredited" />
                    <meta property="article:publisher" content="https://www.facebook.com/marspurifier.uk/" />
                    <meta property="article:modified_time" content="2022-01-27T08:49:19+00:00" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Helmet>
                <div className="layout">
                    <Products
                        headingText="Shop"
                        products={products}
                    />

                </div>
            </div>

        </div>
    )
};

export default Shop;
