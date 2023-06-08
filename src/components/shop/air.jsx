import React from "react";
import { useContext, useState } from "react";
import "./air.scss";
import useFetch from "../../hooks/useFetch";
import Products from "../../components/Products/Products";
import Allp from "./allp";
import Airp from "./airp";
import Waterp from "./waterp";
import imf from "../../assets/gen-x-y-z-mixed-no-bg.webp";

const RelatedProducts = ({ categoryId, productId, innerPage, headingText }) => {
  const { data } = useFetch(
    `/api/products?populate=*`
  );
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="related-products">
      <div className="shop-baner">
        <div className="text-page-shop">
          <h3>
            Mars Purification System <br />
            Shop Now
          </h3>
          <button>All products</button>
        </div>
        <div className="img-page-shop">
          <img src={imf} alt="" />
        </div>
      </div>
      <div className="descprtr">
        <div className="containerx">
          <div className="tabss">
            <div
              className={toggleState === 1 ? "tabs2 active-tabs2" : "tabs2"}
              onClick={() => toggleTab(1)}
            >
             All Products
            </div>
            <div
              className={toggleState === 2 ? "tabs2 active-tabs2" : "tabs2"}
              onClick={() => toggleTab(2)}
            >
              Air Purifier
            </div>
            <div
              className={toggleState === 3 ? "tabs2 active-tabs2" : "tabs2"}
              onClick={() => toggleTab(3)}
            >
              Water Purifier
            </div>
          </div>
          <div
            className={
              toggleState === 1 ? "content1  active-content1" : "content1"
            }
          >
            <Allp />
          </div>
          <div
            className={
              toggleState === 2 ? "content1  active-content1" : "content1"
            }
          >
           <Airp />
          </div>
          <div
            className={
              toggleState === 3 ? "content1  active-content1" : "content1"
            }
          >
            <Waterp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
