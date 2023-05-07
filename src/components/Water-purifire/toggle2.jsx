import "./Water-purifire.scss";
import { useContext, useState } from "react";
import bl1 from "../../assets/products/bl1.webp"
import bl2 from "../../assets/products/bl2.webp"
import bl3 from "../../assets/products/bl3.webp"
import bl4 from "../../assets/products/bl4.webp"
import bl5 from "../../assets/products/bl5.webp"
const WaterPurifire = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="sec-2">
                <h1>LARQ Insulated Bottle</h1>
                <p>Starting at $35</p>

                <div className="descprtr">
                    <div className="containerx">
                        <div
                            className={toggleState === 1 ? "content1  active-content1" : "content1"}
                        >
                            <img src={ bl1} alt="" />
                            <h5>Monaco Blue</h5>
                        </div>

                        <div
                            className={toggleState === 2 ? "content1  active-content1" : "content1"}
                        >
                            <img src={ bl2} alt="" />
                            <h5>Obsidian Black</h5>
                        </div>
                        <div
                            className={toggleState === 3 ? "content1  active-content1" : "content1"}
                        >
                            <img src={ bl3} alt="" />
                            <h5>Seaside Mint</h5>
                        </div>
                        <div
                            className={toggleState === 4 ? "content1  active-content1" : "content1"}
                        >
                            <img src={ bl4} alt="" />
                            <h5>Granite White</h5>
                        </div>
                        <div
                            className={toggleState === 5 ? "content1  active-content1" : "content1"}
                        >
                            <img src={ bl5} alt="" />
                            <h5>Himalayan Pink</h5>
                        </div>
                    </div>
                    <div className="tabz2" >
                        <div
                            className={toggleState === 1 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(1)}
                        >
                            <img src={ bl1} alt="" />
                        </div>
                        <div
                            className={toggleState === 2 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(2)}
                        >
                            <img src={ bl2} alt="" />
                        </div>
                        <div
                            className={toggleState === 3 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(3)}
                        >
                            <img src={ bl3} alt="" />
                        </div>
                        <div
                            className={toggleState === 4 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(4)}
                        >
                            <img src={ bl4} alt="" />
                        </div>
                        <div
                            className={toggleState === 5 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(5)}
                        >
                            <img src={ bl5} alt="" />
                        </div>
                        
                    </div>
                </div>
                <span>The LARQ Insulated Bottle features double-wall vacuum insulation to keep water cold for up to 24 hours and hot for 12 hours.</span>
            </div>

        </>
    );
};

export default WaterPurifire;
