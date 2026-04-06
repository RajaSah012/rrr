import React from "react";
import data from "../../data/preschoolData.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const Preschool = () => {
    return (
        <section className="min-h-screen w-full bg-[#FFF] text-gray-900">

            {/* ===== HEADER ===== */}
            <Header />

            {/* ===== HERO ===== */}
            <Hero
                bgImage="/preschool.png"
                tag="Preschool"
                title={
                    <>
                        Where Little Learners <br />
                        Grow Big Dreams
                    </>
                }
                description="Where young unbiased mind, meets boundless environment driven by hands-on experiences, creating learning beyond age."
            />

            {/* ===== WHAT MAKES US DIFFERENT ===== */}
            <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-12">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                    <div className="relative flex justify-center md:justify-center order-1 md:order-none">
                        <div className="relative w-[310px] sm:w-[340px] md:w-[700px] h-auto md:h-[700px]">
                            <img
                                src="/frame37.png"
                                alt="classroom"
                                className="w-full h-full object-contain"
                            />
                            <img
                                src="/flower.png"
                                alt="flower"
                                className="absolute -bottom-8 -right-2 md:-bottom-6 md:-right-12 w-24 md:w-28 h-26 md:h-28 z-20"
                            />
                        </div>
                    </div>

                    <div className="p-0 md:p-4 order-2 md:order-none">
                        <h2 className="text-2xl md:text-4xl leading-snug mb-4 text-[#E68C8C] font-['Balsamiq_Sans']">
                            What Makes Us Different
                        </h2>
                        <p className="text-gray-600 font-medium text-md md:text-lg leading-[2.4] md:leading-[1.8] tracking-wide font-['Poppins'] mb-6">
                            At Raising Right Education, we believe the early years should feel joyful, secure and full of wonder. Our preschool approach blends play-based discovery with gentle social-emotional guidance, ensuring little ones grow not only in curiosity but in kindness and independence.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "We believe childhood should be Joyful, not a race through books.",
                                "We wish to see our children explore, create, and understand world, through hands-on and real life experiences - Unified with curiosity, independence to expression and confidence.",
                                "When young unbiased mind, meets boundless environment driven by hands-on experiences, creates learning beyond age.",
                                "We have designed a space, surrounded by a world of colours, textures, tunes, languages, where sensory experiences leave lasting impressions, helping their young minds grow sharper, curious, and creative every aspect.",
                            ].map((point, i) => (
                                <li key={i} className="flex items-start font-medium gap-3 text-md md:text-lg text-gray-600">
                                    <img src="/iconoir_badge-check.png" alt="" className="w-5 md:w-6 h-5 md:h-6 mt-[2px]" />
                                    <span className="leading-[2.4] md:leading-[1.8] -mt-1">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* ===== DATA LOOP SECTION ===== */}
            <div className="min-h-fit w-full bg-[#FFF] py-16 md:py-24 space-y-16 md:space-y-20 overflow-hidden px-6 md:px-8">
                {data.map((item, index) => {
                    const isLeft = item.align === "left";
                    return (
                        <div
                            key={index}
                            className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16"
                        >
                            {isLeft && (
                                <div className="relative flex justify-center md:justify-start md:-ml-1 order-2 md:order-none">
                                    <div
                                        className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden z-10"
                                        style={{ boxShadow: `25px 20px 0px ${item.shadowColor}` }}
                                    >
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            )}

                            <div className="max-w-xl text-left order-1 md:order-none">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug mb-4 md:mb-6 font-['Balsamiq_Sans']">
                                    {item.title}
                                </h2>
                                <p
                                    className="text-gray-600 text-base sm:text-lg md:text-xl leading-[2.4] font-medium md:leading-[1.8] tracking-wide font-['Poppins']"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            </div>

                            {!isLeft && (
                                <div className="relative flex justify-center md:justify-end md:-mr-1 order-2 md:order-none">
                                    <div
                                        className="relative w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden z-10"
                                        style={{ boxShadow: `-25px 20px 0px ${item.shadowColor}` }}
                                    >
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ===== FEES SECTION ===== */}
            <div className="relative w-[95vw] mx-auto min-h-fit md:min-h-0 py-8 md:py-6 lg:py-16 px-4 md:px-8 lg:px-16 border-4 border-[#FFC539] rounded-3xl md:border-none md:rounded-none">
                <img
                    src="/preschoolbg.png"
                    alt="fees background"
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 inset-y-0 w-[95vw] h-full object-contain"
                />
                <div className="relative w-full min-h-fit py-8 md:py-10 lg:py-16 px-4 md:px-8 lg:px-16">
                    <div className="max-w-3xl md:max-w-xl lg:max-w-4xl mx-auto">
                        <h2 className="text-center text-3xl md:text-3xl lg:text-5xl text-[#E68C8C] mb-6 md:mb-4 lg:mb-16 font-['Balsamiq_Sans']">
                            Fees ( 2026 - 27 )
                        </h2>
                        <div className="flex justify-between items-center text-lg md:text-lg lg:text-3xl mb-2 md:mb-3 font-['Balsamiq_Sans']">
                            <span>Grade</span>
                            <span>Annual Fees</span>
                        </div>
                        <div className="h-[2px] w-full bg-[#E5B85C] mb-6 md:mb-4 lg:mb-8" />
                        <div className="space-y-6 md:space-y-3 lg:space-y-6 text-sm md:text-sm lg:text-xl font-['Poppins']">
                            {[
                                { grade: "Playgroup", fee: "₹80,000" },
                                { grade: "Nursery", fee: "₹90,000" },
                                { grade: "Junior KG", fee: "₹1,00,000" },
                                { grade: "Senior KG", fee: "₹1,10,000" },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">{item.grade}</span>
                                        <span className="text-gray-700 font-medium">{item.fee}</span>
                                    </div>
                                    {i !== 3 && <div className="h-[1px] w-full bg-[#E8C98B] mt-2 md:mt-2" />}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 md:mt-6 lg:mt-16 space-y-3 md:space-y-4 lg:space-y-8 max-w-xl md:max-w-md mx-auto lg:max-w-2xl">
                            <div className="flex items-start gap-2 md:gap-3 lg:gap-6">
                                <img src="/star.png" className="w-5 h-5 md:w-6 md:h-6 lg:w-12 lg:h-12" />
                                <p className="text-black font-medium text-md md:text-base lg:text-xl leading-snug">
                                    Fees Includes all, Event, Outing, Celebration, Uniforms, Learning aids, Monthly news paper, Play area access
                                </p>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3 lg:gap-6">
                                <img src="/star.png" className="w-5 h-5 md:w-6 md:h-6 lg:w-12 lg:h-12" />
                                <p className="text-black font-medium text-md md:text-base lg:text-xl leading-snug">
                                    Fees can be paid in 4 instalments without any additional surcharge
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== LOCATIONS SECTION ===== */}
            <div className="max-w-screen-xl mx-auto py-16 md:py-24 px-6 md:px-0">
                <h2 className="text-center text-3xl md:text-5xl text-[#E68C8C] mb-12 md:mb-16 font-['Balsamiq_Sans']">
                    Preschool Locations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

                    {/* Location 1 */}
                    <div className="relative w-full max-w-md mx-auto">
                        <img src="/frame1.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none" />
                        <div className="relative rounded-2xl p-8 md:p-12 text-center flex flex-col h-full">
                            <div className="text-[#D0CFED] text-6xl mb-4 md:mb-6">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-['Space_Grotesk']">
                                Kandivali, MG Road
                            </h3>
                            <p className="text-gray-600 font-medium text-md md:text-base leading-[1.8] mb-6 md:mb-8">
                                White House, Mahatma Gandhi Rd, near Lakshminarayan Temple, Kandivali West, Mumbai 400067
                            </p>
                            <div className="mt-auto">
                                <div className="inline-block p-[4px] rounded-full border-2 border-dashed border-[#31A6AE]">
                                    <a href="https://share.google/25LdhNKfpN1l6m4Y6" target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#31A6AE] text-white text-sm md:text-base font-medium">
                                            View on map
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location 2 */}
                    <div className="relative w-full max-w-md mx-auto">
                        <img src="/frame2.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none" />
                        <div className="relative rounded-2xl p-8 md:p-12 text-center flex flex-col h-full">
                            <div className="text-[#EDAFB8] text-6xl mb-4 md:mb-6">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-['Space_Grotesk']">
                                Kandivali, Mahavir Nagar
                            </h3>
                            <p className="text-gray-600 font-medium text-md md:text-base leading-[1.8] mb-6 md:mb-8">
                                Kush Elegante, New Link Road, Mahavir Nagar, Kandivali West, Mumbai 400067
                            </p>
                            <div className="mt-auto">
                                <div className="inline-block p-[4px] rounded-full border-2 border-dashed border-[#31A6AE]">
                                    <a href="https://share.google/43Mw6e9jFpi3eoy2H" target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#31A6AE] text-white text-sm md:text-base font-medium">
                                            View on map
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location 3 */}
                    <div className="relative w-full max-w-md mx-auto">
                        <img src="/frame1.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none" />
                        <div className="relative rounded-2xl p-8 md:p-12 text-center flex flex-col h-full">
                            <div className="text-[#D0CFED] text-6xl mb-4 md:mb-6">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 font-['Space_Grotesk']">
                                Borivali West, Gorai 2
                            </h3>
                            <p className="text-gray-600 font-medium text-md md:text-base leading-[1.8] mb-6 md:mb-8">
                                Plot 154, RSC 15, near Suvidhya School, Gorai 2, Borivali West, Mumbai 400091
                            </p>
                            <div className="mt-auto">
                                <div className="inline-block p-[4px] rounded-full border-2 border-dashed border-[#31A6AE]">
                                    <a href="https://share.google/LfxgckuJcYrkvfERM" target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 md:px-8 py-2 md:py-3 rounded-full bg-[#31A6AE] text-white text-sm md:text-base font-medium">
                                            View on map
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ===== FOOTER ===== */}
            <Footer />

        </section>
    );
};

export default Preschool;