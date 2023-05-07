import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div className="pros">
            <div
                className="product-card"
                onClick={() => navigate("/product/" + id)}
            >
                <div className="thumbnail">
                    <img
                        src={
                            process.env.REACT_APP_DEV_URL +
                            data.image.data.attributes.url
                        }
                    />
                </div>
                <div className="prod-details">
                    <span className="category">{data.Category}</span>
                    <span className="name">{data.title}</span>
                    <span className="price">£{data.price}</span>
                    <button className="product-btn" onClick={() => navigate("/product/" + id)}>View Product</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
