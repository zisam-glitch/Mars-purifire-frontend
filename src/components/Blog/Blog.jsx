import React, { useEffect, useContext } from "react";
import "./Blog.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Post from "./Post/Post";
import { Helmet } from 'react-helmet';


const Blog = () => {
    const { products, setProducts, categories, setCategories, posts, setPosts } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
        getPosts();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getPosts = () => {
        fetchDataFromApi("/api/posts?populate=*").then((res) => {
            setPosts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };


    return (
        <>
            <div className="title-blog">
                <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="profile" href="https://gmpg.org/xfn/11" />
                    <title>Blog - Air Purification System Against Viruses</title>
                    <meta name="description" content="Check This Blog on Can an Air Purifier Eliminates Viruses And How To Reduce Fallow Time in Dentistry." />
                    <link rel="canonical" href="https://marspurifier.com/blog/" />
                    <link rel="next" href="https://marspurifier.com/blog/page/2/" />
                    <meta property="og:locale" content="en_GB" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Blog - Air Purification System Against Viruses" />
                    <meta property="og:description" content="Check This Blog on Can an Air Purifier Eliminates Viruses And How To Reduce Fallow Time in Dentistry." />
                    <meta property="og:url" content="https://marspurifier.com/blog/" />
                    <meta property="og:site_name" content="Dental Air Purification - Accredited" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Helmet>
                <h1>Our Latest News</h1>
            </div>
            <div>
                <Post posts={posts} />
            </div>
        </>
    )
};

export default Blog;
