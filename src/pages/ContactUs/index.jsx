import React, { useState } from "react";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const options = [
  "Child Admission",
  "Career Opportunities",
  "Curriculum Enquiry",
  "General Enquiry",
];

const CustomSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="w-full px-4 md:px-6 py-3.5 rounded-xl border border-[#D8DCE5] bg-[#F8FAFC] text-[#4D5667] text-sm md:text-base font-['Poppins'] cursor-pointer flex justify-between items-center hover:border-[#2AA6B4] transition-all duration-200"
      >
        {value}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2AA6B4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-[#E5E7EB] rounded-xl shadow-md overflow-hidden">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-5 py-2.5 text-sm md:text-base font-['Poppins'] text-[#4D5667] hover:bg-[#F1F5F9] cursor-pointer transition-colors duration-150"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purpose: "Child Admission",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section className="min-h-screen w-full bg-[#FBF7EC] text-[#111]">

      <Header />
      <Hero
        bgImage="/contact.png"
        mobileBgImage="/mtestimonials2.png"
        tag="Contact Us"
        title={
          <>
            Your Child's Future Begins <br /> with a Conversation
          </>
        }
        description="Join us as a parent or be a part of our mission to shape young lives."
      />

      <div className="max-w-screen-xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-12 md:pb-20 grid md:grid-cols-[480px_1fr] gap-10 md:gap-14 items-start">

        <div className="space-y-7 md:space-y-9">

          <div>
            <h2 className="text-3xl md:text-5xl font-normal text-[#ED8F8F] mb-3 md:mb-5 font-['Balsamiq_Sans']">
              Contact Details
            </h2>
            <p className="text-base md:text-lg text-[#565B66] leading-relaxed md:leading-[1.9] font-['Poppins'] max-w-sm">
              Have a question about our curriculum,
              admissions, or campus life? Our friendly
              team is ready to assist you.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5">

            <div className="relative w-full max-w-[420px] overflow-hidden">
              <img src="/Frame296.png" alt="frame" className="absolute inset-0 w-full h-full" />
              <div className="relative px-6 py-5 md:px-8 md:py-7">
                <h3 className="text-base md:text-lg font-semibold mb-2.5 md:mb-3.5 font-['Space_Grotesk']">
                  Email Us
                </h3>
                <div className="flex items-center gap-2.5 text-[#1C1C1C] font-['Poppins']">
                  <img src="/material-symbols_mail-outline-rounded.png" alt="mail" className="w-5 h-5" />
                  <span className="text-sm md:text-lg">info@raisingright.education</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[420px] overflow-hidden">
              <img src="/Frame297.png" alt="frame" className="absolute w-full h-full" />
              <div className="relative px-6 py-5 md:px-8 md:py-7">
                <h3 className="text-base md:text-lg font-semibold mb-2.5 md:mb-3.5 font-['Space_Grotesk']">
                  Call Us
                </h3>
                <div className="space-y-2.5 text-[#1C1C1C] font-['Poppins']">
                  <div className="flex items-center gap-3">
                    <img src="/proicons_call.png" alt="call" className="w-5 h-5" />
                    <span className="text-sm md:text-lg">+91 83559 53059</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/proicons_call.png" alt="call" className="w-5 h-5" />
                    <span className="text-sm md:text-lg">+91 85911 53059</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="relative w-full max-w-3xl">

          <img
            src="/frame4.png"
            alt="frame"
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          />
          <img
            src="/contactframe.png"
            alt="frame"
            className="absolute inset-0 w-full h-full pointer-events-none block md:hidden"
          />

          <div className="relative px-6 py-7 md:px-9 md:py-9">
            <div className="grid gap-4 md:gap-5">

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#1C1C1C] font-['Poppins'] tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Suresh Singh"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 md:px-5 py-3 rounded-xl border border-[#D8DCE5] text-[#4D5667] outline-none bg-white text-sm md:text-base font-['Poppins'] focus:border-[#2AA6B4] transition-colors duration-150"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#1C1C1C] font-['Poppins'] tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Sureshsingh67@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 md:px-5 py-3 rounded-xl border border-[#D8DCE5] text-[#4D5667] outline-none bg-white text-sm md:text-base font-['Poppins'] focus:border-[#2AA6B4] transition-colors duration-150"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#1C1C1C] font-['Poppins'] tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 md:px-5 py-3 rounded-xl border border-[#D8DCE5] text-[#4D5667] outline-none bg-white text-sm md:text-base font-['Poppins'] focus:border-[#2AA6B4] transition-colors duration-150"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#1C1C1C] font-['Poppins'] tracking-wide">
                  Purpose of Enquiry
                </label>
                <CustomSelect
                  value={formData.purpose}
                  onChange={(val) => setFormData({ ...formData, purpose: val })}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-[#1C1C1C] font-['Poppins'] tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write the message here"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 md:px-5 py-3 rounded-xl border border-[#D8DCE5] text-[#4D5667] outline-none bg-white text-sm md:text-base font-['Poppins'] resize-none focus:border-[#2AA6B4] transition-colors duration-150"
                />
              </div>

              <div className="pt-1">
                <div className="inline-block p-[3px] rounded-full border-2 border-dashed border-[#2AA6B4]">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#2AA6B4] text-white rounded-full px-7 md:px-9 py-2.5 text-sm md:text-base font-semibold font-['Poppins'] tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-4 py-14 md:py-20">

        <h2 className="text-center text-3xl md:text-4xl lg:text-[2.8rem] text-[#E68C8C] mb-10 md:mb-14 font-['Balsamiq_Sans']">
          Our Campuses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-9">

          <div className="relative w-full max-w-md mx-auto">
            <img src="/frame9.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none" />
            <div className="relative px-6 py-7 md:px-8 md:py-9 text-center">
              <div className="text-[#D0CFED] text-5xl mb-4 md:mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2.5 md:mb-3.5 font-['Space_Grotesk']">
                Kandivali, MG Road
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 md:mb-7 min-h-[80px]">
                White House, Mahatma Gandhi Rd, near Lakshminarayan Temple, Kandivali West, Mumbai 400067
              </p>
              <div className="mt-auto">
                <div className="inline-block p-[3px] rounded-full border-2 border-dashed border-[#31A6AE]">
                  <a href="https://share.google/25LdhNKfpN1l6m4Y6" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 md:px-7 py-2 rounded-full bg-[#31A6AE] text-white text-sm font-medium">
                      View on map
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <img src="/frame14.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none" />
            <div className="relative px-6 py-7 md:px-8 md:py-9 text-center">
              <div className="text-[#FFDAB4] text-5xl mb-4 md:mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2.5 md:mb-3.5 font-['Space_Grotesk']">
                Kandivali, Mahavir nagar
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 md:mb-7 min-h-[80px]">
                Kush Elegante, New Link Road, Mahavir Nagar, Kandivali West, Mumbai 400067
              </p>
              <div className="mt-auto">
                <div className="inline-block p-[3px] rounded-full border-2 border-dashed border-[#31A6AE]">
                  <a href="https://share.google/43Mw6e9jFpi3eoy2H" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 md:px-7 py-2 rounded-full bg-[#31A6AE] text-white text-sm font-medium">
                      View on map
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <img src="/frame10.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none" />
            <div className="relative px-6 py-7 md:px-8 md:py-9 text-center">
              <div className="text-[#D6E5BE] text-5xl mb-4 md:mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2.5 md:mb-3.5 font-['Space_Grotesk']">
                Borivali West, Gorai 2
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 md:mb-7 min-h-[80px]">
                Plot 154, RSC 15, near Suvidhya School, Gorai 2, Borivali West, Mumbai 400091
              </p>
              <div className="mt-auto">
                <div className="inline-block p-[3px] rounded-full border-2 border-dashed border-[#31A6AE]">
                  <a href="https://share.google/LfxgckuJcYrkvfERM" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 md:px-7 py-2 rounded-full bg-[#31A6AE] text-white text-sm font-medium">
                      View on map
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactUs;