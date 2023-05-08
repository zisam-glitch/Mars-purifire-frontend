import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import ReactMarkdown from 'react-markdown'
import { FaCartPlus } from "react-icons/fa";
import "./SingleProduct.scss";
import { Helmet } from 'react-helmet';
import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
import ckeditor5MrkdownDll from "@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context);
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
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
    const product = data?.data[0].attributes

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
                        <img src={process.env.REACT_APP_DEV_URL +
                            product.image.data.attributes.url} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">{product.price}</span>
                        <ReactMarkdown>
                            {product.description}
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
                                <span>
                                    {
                                        product.categories.data[0].attributes
                                            .title
                                    }
                                </span>
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
                                className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                <ReactMarkdown>
                                    {product.mainDesc}
                                </ReactMarkdown>
                            </div>

                            <div
                                className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                                <h1>{product.jsom[0]?.title}</h1>
                                <table className="table-mn">
                                    <tr>
                                        <th className="table-mntr">{product.jsom[0]?.title}</th>

                                    </tr>
                                    <tr>
                                        <td>{product.jsom[0]?.text}</td>
                                        <td>{product.jsom[0]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom[1]?.text}</td>
                                        <td>{product.jsom[1]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom[2]?.text}</td>
                                        <td>{product.jsom[2]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom[3]?.text}</td>
                                        <td>{product.jsom[3]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom[4]?.text}</td>
                                        <td>{product.jsom[4]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom[5]?.text}</td>
                                        <td>{product.jsom[5]?.value}</td>
                                    </tr>
                                </table>
                                <h1>{product.jsom1[0]?.title}</h1>
                                <table className="table-mn">
                                    <tr>
                                        <th className="table-mntr">{product.jsom1[1]?.title}</th>

                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[0]?.text}</td>
                                        <td>{product.jsom1[0]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[1]?.text}</td>
                                        <td>{product.jsom1[1]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[2]?.text}</td>
                                        <td>{product.jsom1[2]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[3]?.text}</td>
                                        <td>{product.jsom1[3]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[4]?.text}</td>
                                        <td>{product.jsom1[4]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom1[5]?.text}</td>
                                        <td>{product.jsom1[5]?.value}</td>
                                    </tr>

                                </table>
                                <h1>{product.jsom2[0]?.title}</h1>
                                <table className="table-mn">
                                    <tr>
                                        <th className="table-mntr">{product.jsom2[1]?.title}</th>

                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[0]?.text}</td>
                                        <td>{product.jsom2[0]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[1]?.text}</td>
                                        <td>{product.jsom2[1]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[2]?.text}</td>
                                        <td>{product.jsom2[2]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[3]?.text}</td>
                                        <td>{product.jsom2[3]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[4]?.text}</td>
                                        <td>{product.jsom2[4]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[5]?.text}</td>
                                        <td>{product.jsom2[5]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[6]?.text}</td>
                                        <td>{product.jsom2[6]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[7]?.text}</td>
                                        <td>{product.jsom2[7]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[8]?.text}</td>
                                        <td>{product.jsom2[8]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[9]?.text}</td>
                                        <td>{product.jsom2[9]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[10]?.text}</td>
                                        <td>{product.jsom2[10]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[11]?.text}</td>
                                        <td>{product.jsom2[11]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[12]?.text}</td>
                                        <td>{product.jsom2[12]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[13]?.text}</td>
                                        <td>{product.jsom2[13]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[14]?.text}</td>
                                        <td>{product.jsom2[14]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom2[15]?.text}</td>
                                        <td>{product.jsom2[15]?.value}</td>
                                    </tr>
                                </table>
                                <h1>{product.jsom3[0]?.title}</h1>
                                <table className="table-mn">
                                    <tr>
                                        <th className="table-mntr">{product.jsom3[1]?.title}</th>
                                        <th className="table-mntr">{product.jsom3[2]?.title}</th>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[0]?.text}</td>
                                        <td>{product.jsom3[0]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[1]?.text}</td>
                                        <td>{product.jsom3[1]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[2]?.text}</td>
                                        <td>{product.jsom3[2]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[3]?.text}</td>
                                        <td>{product.jsom3[3]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[4]?.text}</td>
                                        <td>{product.jsom3[4]?.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{product.jsom3[5]?.text}</td>
                                        <td>{product.jsom3[5]?.value}</td>
                                    </tr>

                                </table>
                            </div>

                            <div
                                className={toggleState === 3 ? "content  active-content" : "content"}
                            >
                                <ReactMarkdown>
                                    {product.support}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                />
            </div>

        </div>
    );
};

export default SingleProduct;
