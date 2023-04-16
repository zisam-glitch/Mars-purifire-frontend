import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SinglePost from "./components/SinglePost/singlePost";
import About from "./components/about/about";
import Shop from "./components/shop/shop";
import Denticity from "./components/Denticity/Denticity";
import Education from "./components/Education/Education";
import FAQ from "./components/FAQ/faq";
import AppContext from "./utils/context";
import HealthCare from "./components/HealthCare/HealthCare";
import Business from "./components/Business/Business";
import Hospitality from "./components/Hospitality/Hospitality";
import GymAndFitnessStudio from "./components/GymAndFitnessStudio/GymAndFitnessStudio";
import Contact from "./components/contact/contact";
import Blog from "./components/Blog/Blog";
import Calculate from "./components/Calculate/Calculate";
import PrivacyPolicy from "./components/Leagal/PrivacyPolicy/PrivacyPolicy"
import AcceptableUsePolicy from "./components/Leagal/AcceptableUsePolicy/AcceptableUsePolicy"
import TermsAndCondition from "./components/Leagal/Terms&Condition/Terms&Condition"
import CookiePolicy from "./components/Leagal/CookiePolicy/CookiePolicy"
import ModernSlaveryAct from "./components/Leagal/ModernSlaveryAct/ModernSlaveryAct"



function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/post/:id" element={<SinglePost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/denticity" element={<Denticity />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/health-care" element={<HealthCare />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/hospitality" element={<Hospitality />} />
                    <Route path="/gym-and-fitness-studio" element={<GymAndFitnessStudio />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/calculate" element={<Calculate />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
                    <Route path="/terms-and-condition" element={<TermsAndCondition />} />
                    <Route path="/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/modern-slavery-act" element={<ModernSlaveryAct />} />
                    
                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
