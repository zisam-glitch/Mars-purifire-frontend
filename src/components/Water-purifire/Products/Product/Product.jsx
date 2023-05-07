import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div className="pros1">
            <div
                className="product-card"
                onClick={() => navigate("/product/" + id)}
            >
                <div className="thumbnail1">
                    <img
                        src={
                            process.env.REACT_APP_DEV_URL +
                            data.image.data.attributes.url
                        }
                    />
                </div>
                <div className="prod-details1">
                    <span className="name">{data.title}</span>
                    <span className="price">£{data.price}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
