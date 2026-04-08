import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import PreSchool from "./pages/PreSchool";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Foundation from "./pages/Foundation";
import PrimarySchool from "./pages/PrimarySchool";
import Testimonials from "./pages/Testimonials";
import WhatMakesUsDifferent from "./pages/WhatMakesUsDifferent";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AppLayout from "./layouts/AppLayout";

function App() {
    return (
        <AppLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home2 />} />
                <Route path="/preschool" element={<PreSchool />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/foundation" element={<Foundation />} />
                <Route path="/primary-school" element={<PrimarySchool />} />
                <Route path="/primaryschool" element={<PrimarySchool />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/what-makes-us-different" element={<WhatMakesUsDifferent />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </AppLayout>
    );
}

export default App;
