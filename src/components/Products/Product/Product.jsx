import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div className="pros">
            <div 
                className="product-card"
                onClick={() => navigate(`/product/${data.slug}`)}
                
            >
                <div className="thumbnail">
                    <img
                        src={
                            process.env.REACT_APP_DEV_URL +
                            data.image.data[0].attributes.url
                        }
                    />
                </div>
                <div className="prod-details">
                
                    <span className="name">{data.title}</span>
                    <span className="price">£{data.price}</span>
                    
                   
                </div>
                <button className="product-btn" onClick={() => navigate(`/product/${data.slug}`)}>View Product</button>
            </div>
        </div>
    );
};

export default Product;
