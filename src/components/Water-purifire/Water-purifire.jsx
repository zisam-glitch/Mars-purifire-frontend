import "./Water-purifire.scss";
import BanerImg from "../../assets/w-baner.png";
import Left from "../../assets/category/left.jpg";
import Right from "../../assets/category/right.jpg";
import Info from "../../assets/category/info.jpg";
import Middel from "../../assets/category/middel.jpg";
import Img1 from "../../assets/category/img1.png";
import Img2 from "../../assets/category/img2.png";
import { useNavigate } from "react-router-dom";

const WaterPurifier = () => {
  const navigate = useNavigate();
  return (
    <div className="wContainer">
      <div className="wBaner">
        <div className="wChild1">
          <h3>THE EASIEST WAY TO GET FILTERED WATER!</h3>
          <h1>The Easiest Way to Get Filtered Water!</h1>
          <p>
            That’s 16 generations. 99% of plastic causes climate change. How do
            we create a future in which both people and nature can thrive.
          </p>
          <button onClick={() => navigate("/shop")} >BUY NOW</button>
        </div>
        <div className="wChild2">
          <img src={BanerImg} alt="" />
        </div>
      </div>
      <div className="wBaner">
        <div className="wChild3">
          <h3>WELCOME TO ACHILLES WATER!</h3>
          <h1>Add A Purpose To Your Drinking Habits</h1>
          <p>
            Achilles bottle is all set to break the market of water bottles.
            <br />
            <br />
            Protect yourself from bacteria and water-based impurities by getting
            yourself an Achilles Bottle.
            <br />
            <br />
            Replaces 500,000 Water Bottles – Reduces plastic waste and needless
            spend of bottled water. BPA and Plastic free – enjoy fresh water
            without replacement filters and with chemical free purification.
            <br />
            <br />
            Self Cleaning Bottle – Stops bacteria and mold from breeding in your
            water bottle.
          </p>
        </div>
        <div className="wChild4">
          <img src={Left} alt="" />
        </div>
      </div>
      <div className="wBaner1">
        <div className="wChild">
          <h1>Trending now</h1>
        </div>
        <div className="listproddst">
          <div className="product-rcard"onClick={() => navigate("/product/achilles-water-bottle-white")}>
            <img src={Img1} alt="" />
            <div className="dtls" onClick={() => navigate("/shop/achilles-water-bottle-white")}>
              <li onClick={() => navigate("/product/achilles-water-bottle-white")}>UV water bottle</li>
              <h5 onClick={() => navigate("/product/achilles-water-bottle-white")}>Achilles Water Bottle White</h5>
              <h6 onClick={() => navigate("/product/achilles-water-bottle-white")}>£49.99</h6>
            </div>
          </div>
          <div className="product-rcard" onClick={() => navigate("/product/achilles-water-bottle-black")}>
            <img src={Img2} alt="" />
            <div className="dtls" onClick={() => navigate("/shop/achilles-water-bottle-black")}>
              <li onClick={() => navigate("/product/achilles-water-bottle-black")} >UV water bottle</li>
              <h5 onClick={() => navigate("/product/achilles-water-bottle-black")} >Achilles Water Bottle Black</h5>
              <h6 onClick={() => navigate("/product/achilles-water-bottle-black")} >£49.99</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="wBaner">
        <div className="wChild7">
          <h3>BETTER FILTRATION</h3>
          <h1>The Achilles Bottle</h1>
          <li>
            Powered by deep UVC – effectively eliminate 99.99% of mold, bacteria
            and viruses from water, with nothing but UV light exposure.
          </li>
          <li>Ultra lightweight and insulated stainless steel.</li>
          <li>Pure water in 60 seconds.</li>
          <li>
            Most bacteria neutralised, including the infamous E.coli, using
            advanced technological cleaning systems.
          </li>
          <li>Long lasting power and splash proof</li>
          <li>
            The bottle activates the cleaning system every 2 hours to ensure
            that the bottle and the water inside are free of any odour.
          </li>
        </div>
        <div className="wChild8">
          <img src={Right} alt="" />
        </div>
      </div>
      <div className="wBaner9">
        <div className="wChild9">
          <img src={Middel} alt="" />
        </div>
        <div className="wChild10">
          <h1>Better Filtration</h1>
          <p>
            UV- C is sterilisation of the future – Achilles powerful UV-C light
            rays are the same wavelength as the UV used to sanitise operating
            rooms and water treatment plants.
            <br />
            <br />
            We use innovative technology that helps to ensure water quality
            inside the system is fully clean, avoiding any bio-contaminant
            growth.
            <br />
            <br />
            Drinkable water at your fingertip – High tech, chemical free
            purification. Best alternative to boiled water.
            <br />
            <br />
            Every minute, 1 million plastic bottles end up in the garbage,
            resulting in an average of 3 single-use bottles per person, per
            week!
          </p>
        </div>
      </div>
      <div className="wBaner">
        <div className="wChild7">
          <h1>One Small Change</h1>
          <li>Plastic in water bottles takes 500-700 years to dissolve.</li>
          <li>Plastic in water bottles is killing animals and ocean life.</li>
          <li>Pure water in 60 seconds.</li>
          <li>Plastic in water bottles is entering our food chain.</li>
          <li>
            Time to leave behind the reusable plastic bottles causing regular
            damage to our planet. Time to embrace the best new water filtration
            system today.
          </li>
        </div>
        <div className="wChild12">
          <img src={Info} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WaterPurifier;
