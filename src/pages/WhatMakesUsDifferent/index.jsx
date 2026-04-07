import React from "react";
import Hero from "../../components/Hero";
import data from "../../data/preschoolData.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WhatMakesUsDifferent = () => {

    const Wave = () => (
        <div className="relative">
            <img src="/wave.png" className="absolute top-0 left-[40%] h-full w-full" />
            <img src="/wave.png" className="relative" />
        </div>
    );

    return (
        <section className="min-h-screen w-full bg-[#FFF] text-gray-900">
   <Header />
            <Hero
                bgImage="/gallery3.png"
                mobileBgImage="/mgallery.png"
                tag="Our Unique Approach"
                title={<>What's Happening</>}
                description="We combine modern education with strong values, real-world experiences, and a nurturing environment to help every child grow into a confident, capable, and well-rounded individual."
            />

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
                                        style={{
                                            boxShadow: `25px 20px 0px ${item.shadowColor}`,
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="absolute -bottom-2 -left-20 md:-bottom-1 md:-left-40 z-0 scale-75 md:scale-100">
                                        <Wave />
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
                                        style={{
                                            boxShadow: `-25px 20px 0px ${item.shadowColor}`,
                                        }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="absolute -bottom-2 right-0 md:-bottom-1 md:-right-5 z-0 scale-75 md:scale-100">
                                        <Wave />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <Footer />

        </section>
    );
};

export default WhatMakesUsDifferent;
