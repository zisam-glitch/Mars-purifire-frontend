import "./Water-purifire.scss";
import { useContext, useState } from "react";
import blk1 from "../../assets/products/blk1.webp"
import blk2 from "../../assets/products/blk2.webp"

const WaterPurifire = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
            <div className="sec-2">
                <h1>LARQ Pitcher PureVis</h1>
                <p>Starting at $49.95<del>$58</del></p>
                <div className="descprtr">
                    <div className="containerx">
                        <div
                            className={toggleState === 1 ? "content1  active-content1" : "content1"}
                        >
                            <img src={blk1} alt="" />
                            <h5>Obsidian Black</h5>
                        </div>

                        <div
                            className={toggleState === 2 ? "content1  active-content1" : "content1"}
                        >
                            <img src={blk2} alt="" />
                            <h5>Granite White</h5>
                        </div>

                    </div>
                    <div className="tabz" >
                        <div
                            className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
                            onClick={() => toggleTab(1)}
                        >
                            <img src={blk1} alt="" />
                        </div>
                        <div
                            className={toggleState === 2 ? "tabs1 active-tabs1" : "tabs1"}
                            onClick={() => toggleTab(2)}
                        >
                            <img src={blk2} alt="" />
                        </div>
                    </div>
                </div>
                <span>A revolutionary portable water filtration system combining high-performance Nano Zero filter with a seamless, low-pressure drinking experience. Take hydration into your own hands.</span>
            </div>

        </>
    );
};

export default WaterPurifire;
