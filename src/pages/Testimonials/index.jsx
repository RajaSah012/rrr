import React from "react";
import Hero from "../../components/Hero";
import testimonials from "../../data/testimonialData.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {

    return (
        <section className="min-h-screen w-full bg-[#FFFAEE] text-gray-900">

          <Header />
            <Hero
                bgImage="/testimonials.png"
                tag="Testimonials"
                title={
                    <>
                        Voices of Trust <br />
                        and Happiness
                    </>
                }
                description="Heartfelt words from parents watching their children learn, grow and smile."
            />
            <div className="w-full py-16 md:py-28">
                <div className="max-w-screen-xl mx-auto px-6 md:px-8 space-y-16 md:space-y-24">

                    {testimonials.map((item, index) => {
                        const isReversed = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-20 ${isReversed ? "md:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* Image */}
                                <div className="relative w-full max-w-[320px] md:max-w-[420px] flex-shrink-0 mx-auto md:mx-0">
                                    <img
                                        src={item.frame}
                                        alt="frame"
                                        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                                    />

                                    <div className="relative p-4 md:p-6">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded-2xl w-full h-[260px] md:h-[380px] object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="max-w-xl text-left">
                                    <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-6 font-['Balsamiq_Sans']">
                                        {item.title}
                                    </h2>

                                    <img
                                        src={item.quote}
                                        alt="quote"
                                        className="w-14 md:w-16 mb-3 md:mb-4"
                                    />

                                    <p className="text-gray-700 text-base md:text-xl font-medium leading-[2.4] md:leading-[1.8] tracking-wide font-['Poppins']">
                                        {item.description}
                                    </p>

                                    <p className="text-[#2AA6B4] text-lg md:text-lg font-semibold font-['Poppins'] pt-4 pb-1">
                                        {item.name}
                                    </p>

                                    <p className="text-gray-800 text-base md:text-lg font-semibold font-['Poppins']">
                                        {item.role}
                                    </p>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
            <div className="w-full bg-[#FFF] py-14 md:py-20 testimonial-slider">

                <div className="max-w-screen-xl mx-auto px-6 md:px-8">

                    <h2 className="text-center text-3xl md:text-5xl font-medium text-[#ED8F8F] mb-12 md:mb-20 font-['Balsamiq_Sans']">
                        Happy Parents
                    </h2>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-14 md:pb-16"
                    >
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative">
                                    <img
                                        src="/frame6.png"
                                        alt="frame"
                                        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                                    />

                                    <div className="relative px-6 md:px-10 py-8 md:py-10 text-center">

                                        <div className="flex justify-center mb-5 md:mb-6">
                                            <img
                                                src="/person.png"
                                                alt="parent"
                                                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                                            />
                                        </div>

                                        <h3 className="text-xl md:text-xl font-semibold text-[#2AA6B4] font-['Balsamiq_Sans']">
                                            Suresh Singh
                                        </h3>

                                        <p className="text-xl md:text-xl text-gray-800 font-semibold mb-5 md:mb-6 font-['Poppins']">
                                            Ramesh's Father
                                        </p>

                                        <div className="flex justify-center mb-4 md:mb-6">
                                            <img
                                                src="/quote4.png"
                                                alt="quote"
                                                className="w-5 md:w-6"
                                            />
                                        </div>

                                        <p className="text-gray-600 leading-[1.8] md:leading-[1.8] tracking-wide max-w-[90%] mx-auto text-lg md:text-md font-medium font-['Poppins']">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam,
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Testimonials;