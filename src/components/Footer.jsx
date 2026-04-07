import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wave = () => (
  <div className="relative">
    <img src="/footer-wave.png" className="relative" />
  </div>
);

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#3FA1A3] text-white rounded-t-[60px] px-10 py-20 pb-40 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">

        <div>
          <h2 className="text-3xl flex items-center mb-6 font-space-grotesk font-semibold">
            <img src="/icon.png" alt="Logo" className="w-12 h-12 object-contain" />
            RaisingRight
          </h2>
          <p className="mb-4 text-lg ps-2">Admissions ? Want to join our team ?</p>
          <div className="inline-block p-[4px] rounded-full border-2 border-dashed border-[#FFBF23] mb-8">
            <a href="https://forms.gle/FMqjEMtM5ojjDgn66" target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-3 rounded-full bg-[#FFBF23] text-white font-semibold">
                Connect
              </button>
            </a>
          </div>
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF className="text-xl text-white" />, link: "https://www.facebook.com/people/Raising-Right/100089982223012/" },
              { icon: <FaInstagram className="text-xl text-white" />, link: "https://www.instagram.com/raising.right/" },
              { icon: <FaLinkedinIn className="text-xl text-white" />, link: "https://www.linkedin.com/company/raising-right/" }
            ].map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-dashed border-[#FFBF23]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFBF23]">
                    {social.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

       <div>
  <h3 className="text-xl font-semibold mb-6 font-space-grotesk">Quick Links</h3>
  <div className="space-y-4 text-[#FDE68A] font-poppins">
    <Link to="/terms-and-conditions" className="flex items-center gap-2">
      <img src="/mingcute_arrows-left-line.png" alt="arrow" className="w-5 h-5" />
      Terms & Conditions
    </Link>
    <Link to="/privacy-policy" className="flex items-center gap-2">
      <img src="/mingcute_arrows-left-line.png" alt="arrow" className="w-5 h-5" />
      Privacy Policy
    </Link>
  </div>
</div>

        <div>
          <h3 className="text-xl font-semibold mb-6 font-space-grotesk">Locations</h3>
          <div className="space-y-4 text-[#FDE68A] font-poppins">
            <a href="https://share.google/25LdhNKfpN1l6m4Y6" target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <img src="/mdi_location.png" alt="location" className="w-5 h-5 mt-1 shrink-0" />
              White House, Mahatma Gandhi Rd, near Lakshminarayan Temple, Kandivali West, Mumbai 400067
            </a>
            <a href="https://share.google/43Mw6e9jFpi3eoy2H" target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <img src="/mdi_location.png" alt="location" className="w-5 h-5 mt-1 shrink-0" />
              Kush Elegante, New Link Road, Mahavir Nagar, Kandivali West, Mumbai 400067
            </a>
            <a href="https://share.google/LfxgckuJcYrkvfERM" target="_blank" rel="noopener noreferrer" className="flex gap-3">
              <img src="/mdi_location.png" alt="location" className="w-5 h-5 mt-1 shrink-0" />
              Plot 154, RSC 15, near Suvidhya School, Gorai 2, Borivali West, Mumbai 400091
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 font-space-grotesk">Contact</h3>
          <div className="space-y-4 text-[#FDE68A] font-poppins">
            <a href="mailto:info@raisingright.education" className="flex items-center gap-3">
              <img src="/flowbite_envelope-solid.png" alt="email" className="w-5 h-5 shrink-0" />
              info@raisingright.education
            </a>
            <a href="tel:+918355953059" className="flex items-center gap-3">
              <img src="/material-symbols_call.png" alt="call" className="w-5 h-5 shrink-0" />
              +91 83559 53059
            </a>
            <a href="tel:+918591153059" className="flex items-center gap-3">
              <img src="/material-symbols_call.png" alt="call" className="w-5 h-5 shrink-0" />
              +91 85911 53059
            </a>
          </div>
        </div>

      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, lineHeight: 0 }} className="opacity-80">
        <Wave />
      </div>
    </footer>
  );
};

export default Footer;
