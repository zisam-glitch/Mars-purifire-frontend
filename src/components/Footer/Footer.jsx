import React from "react";
import "./Footer.scss";
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaMobileAlt, } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import Payment from "../../assets/payments.png";
import Logo from "../../assets/logo/mars-logo.png"
import pot from "../../assets/imgss.jpg"
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="col">
                    <div className="text">
                        <img src={Logo} alt="" />
                        <p>THE specialist in air purification.</p>
                        <div className="cradit">
                            <a href="https://instagram.com/grow_with_sayed?igshid=YmMyMTA2M2Y=">
                            <span>website build by</span>
                            <img src={pot} alt="" /></a>
                        </div>
                        <span className="social-icons">
                            <a href="https://www.facebook.com/marspurifier.uk/"><FaFacebook size={22} /></a>
                            <a href="https://twitter.com/MarsPurifier?s=09"><FaTwitter size={22} /></a>
                            <a href="https://youtube.com/channel/UCmt1DU9wZ8gh58Y05xUhSXw"><FaYoutube size={22} /></a>
                            <a href="https://instagram.com/mars.purifier/?utm_medium=copy_link"><FaInstagram size={22} /> </a>
                        </span>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0800 099 6375</div>
                    </div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Headquarters Wollaton, Nottingham, United Kingdom
                        </div>
                    </div>
                    <div className="c-item">
                        <BsFillClockFill />
                        <div className="text">Mon – Fri: 9.00am 5.00pm</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">QUICK LINKS</div>
                    <span className="text"><Link to='/' className='fav-links'> Home </Link></span>
                    <span className="text"><Link to='/about-mars-purifier-who-we-are' className='fav-links'> About </Link></span>
                    <span className="text"><Link to='/blog' className='fav-links'> Blog </Link></span>
                    <span className="text"><Link to='/contact-us-mars-purifier' className='fav-links'> Contact </Link></span>
                    <span className="text"><Link to='/faqs-mars-purifier-in-2023' className='fav-links'> FAQ </Link></span>

                </div>
                <div className="col">
                    <div className="title">LEGAL</div>
                    <span className="text"><Link to='/privacy-policy' className='fav-links'> Privacy Policy </Link></span>
                    <span className="text"><Link to='/terms-and-condition' className='fav-links'> Terms & Condition </Link></span>
                    <span className="text"><Link to='/acceptable-use-policy' className='fav-links'> Acceptable Use Policy </Link></span>
                    <span className="text"><Link to='/cookie-policy' className='fav-links'> Cookie Policy </Link></span>
                    <span className="text"><Link to='/modern-slavery-act' className='fav-links'> Modern Slavery Act </Link></span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Copyright ©2023 Mars Purifier Industries. All Rights Reserved.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
