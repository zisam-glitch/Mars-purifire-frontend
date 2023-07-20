import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
import { Helmet } from "react-helmet";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

  // 

const SingleProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const markdown = `Just a link: https://reactjs.com.`;
  const [quantity, setQuantity] = useState(1);
  const { slug } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][slug]=${slug}`);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const product = data?.data[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{product.title}</title>
      </Helmet>
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >

              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[0].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[1].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[2].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[3].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[4].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[5].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    product.image.data[6].attributes.url
                  }
                  alt=""
                />
              </SwiperSlide>

            </Swiper>
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">£ {product.price}</span>
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}>
              {product.shortDescription}
            </ReactMarkdown>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data?.data?.[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{product.product_categories.data[0].attributes.title}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="descprtr">
          <div className="containerz">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Description
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Specification
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Support
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="descp">
                  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}>
                    {product.description}
                  </ReactMarkdown>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="spec">
                  <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}>
                    {product.specification}
                  </ReactMarkdown>
                </div>
              </div>
              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}>
                  {product.support}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        {/* <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />     */}
      </div>
    </div>
  );
};

export default SingleProduct;
