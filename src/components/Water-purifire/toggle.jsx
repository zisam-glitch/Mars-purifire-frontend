import "./Water-purifire.scss";
import { useContext, useState } from "react";
import btl1 from "../../assets/products/btl1.webp"
import btl2 from "../../assets/products/btl2.webp"
import btl3 from "../../assets/products/btl3.webp"
import btl4 from "../../assets/products/btl4.webp"
import btl5 from "../../assets/products/btl5.webp"
import btl6 from "../../assets/products/btl6.webp"
const WaterPurifire = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="sec-2">
                <h1>LARQ Bottle PureVis</h1>
                <p>Starting at $99</p>

                <div className="descprtr">
                    <div className="containerx">
                        <div
                            className={toggleState === 1 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl1} alt="" />
                            <h5>Monaco Blue</h5>
                        </div>

                        <div
                            className={toggleState === 2 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl2} alt="" />
                            <h5>Obsidian Black</h5>
                        </div>
                        <div
                            className={toggleState === 3 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl3} alt="" />
                            <h5>Seaside Mint</h5>
                        </div>
                        <div
                            className={toggleState === 4 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl4} alt="" />
                            <h5>Granite White</h5>
                        </div>
                        <div
                            className={toggleState === 5 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl5} alt="" />
                            <h5>Himalayan Pink</h5>
                        </div>
                        <div
                            className={toggleState === 6 ? "content1  active-content1" : "content1"}
                        >
                            <img src={btl6} alt="" />
                            <h5>Eucalyptus Green</h5>
                        </div>
                    </div>
                    <div className="tabz2" >
                        <div
                            className={toggleState === 1 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(1)}
                        >
                            <img src={btl1} alt="" />
                        </div>
                        <div
                            className={toggleState === 2 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(2)}
                        >
                            <img src={btl2} alt="" />
                        </div>
                        <div
                            className={toggleState === 3 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(3)}
                        >
                            <img src={btl3} alt="" />
                        </div>
                        <div
                            className={toggleState === 4 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(4)}
                        >
                            <img src={btl4} alt="" />
                        </div>
                        <div
                            className={toggleState === 5 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(5)}
                        >
                            <img src={btl5} alt="" />
                        </div>
                        <div
                            className={toggleState === 6 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(6)}
                        >
                            <img src={btl6} alt="" />
                        </div>
                    </div>
                </div>
                <span>The LARQ Bottle PureVis™ features double-wall vacuum insulation to keep water cold for up to 24 hours and hot for up to 12.</span>
            </div>

        </>
    );
};

export default WaterPurifire;
