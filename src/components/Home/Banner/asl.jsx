import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../../assets/gen-x-y-z-mixed-no-bg.webp";
import BanerImg from "../../../assets/category/Picture3.png";
const Bnr = () => {
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cont">
            <div className="image-content-mob">
            <img src={BannerImg} alt="Mars Purifere" />
            </div>
            <div className="maincontent">
              <div className="text-content">
                <div className="typewriter">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: ["Clinical", "Industrial", "Domestic"],
                    }}
                  />
                </div>
                <div className="heading">
                  <h1 className="heading-text1">Air Purification</h1>
                  <h1 className="heading-text2">System</h1>
                  <span className="desc">
                    Buy with confidence when you choose a Mars Purifier Unit,
                    designed for use in clinical and regulatory enviroments.
                  </span>
                </div>
                <div className="shop-btn">
                  <button
                    className="shop-now"
                    onClick={() => navigate("/shop")}
                  >
                    Shop now
                  </button>
                </div>
              </div>
              <div className="image-content">
              <img src={BannerImg} alt="Mars Purifere" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cont">
            <div className="image-content-mobr">
            <img src={BanerImg} alt="Mars Purifere" />
            </div>
            <div className="maincontents">
              <div className="text-content">
                <div className="typewriter">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 1,
                      strings: ["Smart", "Water", "Bottle"],
                    }}
                  />
                </div>
                <div className="heading">
                  <h1 className="heading-text1">Water Purification</h1>
                  <h1 className="heading-text2">System</h1>
                  <span className="desc">
                    Buy with confidence when you choose a Achilles Water Bottle
                  </span>
                </div>
                <div className="shop-btn">
                  <button
                    className="shop-now"
                    onClick={() => navigate("/shop")}
                  >
                    Shop now
                  </button>
                </div>
              </div>
              <div className="image-content">
              <img src={BanerImg} alt="Mars Purifere" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Bnr;
