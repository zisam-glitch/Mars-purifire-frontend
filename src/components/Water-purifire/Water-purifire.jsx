import "./Water-purifire.scss";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Togle from "./toggle"
import Togle1 from "./toggle1"
import Togle2 from "./toggle2"
import Gift from "./gift"
import Filters from "./Filters"
import Accessories from "./Accessories"
import prod1 from "../../assets/products/Blue.webp"
import prod2 from "../../assets/products/white.webp"
import Products from "./Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { Helmet } from 'react-helmet';

const WaterPurifire = () => {
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
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const { id } = useParams();
    
    return (
        <>
            <div className="main-water">
            <Helmet>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Mars Water Purifiers System</title>
                </Helmet>
                <section className="water-heading">
                    <div className="main-water-heading">
                        <h1>Gift with purchase!</h1>
                        <p>Get a complimentary Travel Sleeve ($18 value) with your PureVis™ or Filtered bottle purchase!</p>
                    </div>
                </section>
                <section className="gal-water">
                    <div className="water-gal">
                        <div className="sec-1">
                            <h1>Filter. Purify. Track. Drink brilliantly!</h1>
                            <p>A smart water filtration + purification system.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="water-gal">
                        <div className="sec-2">
                            <h1>LARQ Pitcher PureVis</h1>
                            <p>Starting at $139 <del>$168</del></p>
                            <div className="descprtr">
                                <div className="containerx">
                                    <div
                                        className={toggleState === 1 ? "content1  active-content1" : "content1"}
                                    >
                                        <img src={prod1} alt="" />
                                        <h5>Monaco Blue</h5>
                                    </div>

                                    <div
                                        className={toggleState === 2 ? "content1  active-content1" : "content1"}
                                    >
                                        <img src={prod2} alt="" />
                                        <h5>Pure White</h5>
                                    </div>

                                </div>
                                <div className="tabz" >
                                    <div
                                        className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
                                        onClick={() => toggleTab(1)}
                                    >
                                        <img src={prod1} alt="" />
                                    </div>
                                    <div
                                        className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
                                        onClick={() => toggleTab(2)}
                                    >
                                        <img src={prod2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <span>The LARQ Pitcher uses a unique 2-step process to improve the quality of your water using PureVis™ and Nano Zero filter technology–giving you fresh-tasting water sip after sip.</span>
                        </div>
                    </div>
                    <div className="water-gal">
                        <Togle />
                    </div>
                    <div className="water-gal">
                        <div className="sec-4">
                            <h1>Brilliance in a bottle</h1>
                            <p>60 seconds to cleaner water with PureVis.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="water-gal">
                        <div className="sec-5">
                            <h1>All-new LARQ Bottle Filtered</h1>
                            <p>Take hydration into your own hands.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="water-gal"> 
                        <Togle1 />
                    </div>
                    <div className="water-gal">
                        <Togle2 />
                    </div>
                    <div className="water-gal">
                        <div className="sec-8">
                            <h1>LARQ Insulated Bottle</h1>
                            <p>Double-wall insulated stainless steel keeps cool for up to 24 hours or hot for 12.</p>
                            <h4>The LARQ Insulated Bottle does not feature our built-in PureVis™ or Nano Zero technology.</h4>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </section>
                <section className="prodsssz">
                    <Gift
                    productId={id}
                    headingText="Gift Sets"
                    categoryId={1}
                   />
                   <Filters
                    productId={id}
                    headingText="Gift Sets"
                    categoryId={1}
                   />
                   
                   <Accessories
                    productId={id}
                    headingText="Accessories"
                    categoryId={1}
                   />
                </section>
            </div>
        </>
    );
};

export default WaterPurifire;
