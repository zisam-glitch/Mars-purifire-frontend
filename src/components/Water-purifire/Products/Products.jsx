import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="products-container1">
            {!innerPage && <div className="sec-heading1">{headingText}</div>}
            <div className={`products1 ${innerPage ? "innerPage" : ""}`}>
                {products?.data?.map((item) => (
                    <Product
                        key={item.id}
                        id={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;

