import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import teamData from "../../data/teamData.json";

const Team = () => {

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
                bgImage="/team.png"
                tag="Our Team"
                title={
                    <>
                        The Hands That <br />
                        Guide Little Learners
                    </>
                }
                description="A team that listens patiently, teaches gently and helps children discover their own abilities."
            />
            <div className="w-full pt-12 md:pt-14 pb-20 md:pb-26">

                <div className="max-w-screen-xl mx-auto px-6 md:px-8">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
                        <div className="relative flex justify-center md:justify-start">

                            <div
                                className="relative w-[320px] sm:w-[320px] md:w-[420px] h-[320px] sm:h-[320px] md:h-[420px] rounded-full overflow-hidden z-10"
                                style={{
                                    boxShadow: "25px 20px 0px #CED0EF",
                                }}
                            >
                                <img
                                    src="/teamrr.png"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-40 md:-left-40 scale-75 md:scale-100">
                                <Wave />
                            </div>
                        </div>

                        <div className="max-w-xl text-left">

                            <h2 className="text-2xl md:text-4xl font-semibold text-[#E27D7D] mb-1 md:mb-2">
                                Aakashee Shah
                            </h2>

                            <p className="text-xl font-medium mb-6 md:mb-8 font-['Poppins']">
                                Founder, Home School Evangelist
                            </p>

                            <div className="relative">

                                <img
                                    src="/frame7.png"
                                    alt="frame"
                                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                                />

                                <div className="relative p-6 md:p-8">

                                    <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4">
                                        Mission
                                    </h3>

                                    <p className="text-gray-800 font-medium text-sm md:text-base leading-[2.4] md:leading-[2] font-['Poppins']">
                                        Raising right education space built on the belief that education should be expansive—not expensive or restrictive.
                                        Learning should go beyond books. A strong curriculum and a joyful childhood can coexist.
                                        Because at the end of the day, education is not about marks or milestones alone. It is about raising children who are confident in who they are, curious about the world around them, and courageous enough to create their own path.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-14 md:mt-24">

                        {[
                            {
                                title: "About",
                                text: "A pediatric psychotherapist and curriculum designer by training. My journey took me from the vibrant streets of Mumbai to the educational landscapes of Singapore."
                            },
                            {
                                title: "Educational Philosophy",
                                text: "I believe in open-ended learning and development-based education. Our approach is driven by curiosity, where the child's natural drive for discovery is at the center of every classroom interaction."
                            },
                            {
                                title: "Home Schooling Journey",
                                text: "Through the personal journey of homeschooling my own child, I discovered the profound power of alternative learning methods that respect a child's individual pace and interests."
                            },
                            {
                                title: "RaisingRight Vision",
                                text: "Created to bridge the gap in mainstream education. Our vision is to focus on individuality and growth beyond grades, creating a space where curiosity is the greatest teacher."
                            }
                        ].map((item, index) => (

                            <div key={index} className="relative">

                                <img
                                    src="/frame8.png"
                                    alt="frame"
                                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                                />

                                <div className="relative p-6 md:p-8">

                                    <h4 className="font-semibold text-xl mb-3 md:mb-4">
                                        {item.title}
                                    </h4>

                                    <p className="text-gray-700 font-medium text-sm md:text-base leading-[2.4] md:leading-8 font-['Poppins']">
                                        {item.text}
                                    </p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </div>
            <div className="w-full pb-16 md:pb-20">

                <div className="max-w-screen-xl mx-auto px-6 md:px-8">

                    <h2 className="text-center text-3xl md:text-5xl font-semibold text-[#E27D7D] mb-4 md:mb-6">
                        Our Educators
                    </h2>

                    <p className="text-center text-lg md:text-base text-[#1C1C1C] font-medium max-w-md md:max-w-2xl mx-auto mb-10 md:mb-12 font-['Poppins']">
                        Dedicated professionals who bring warmth, expertise, and care to every learning moment
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 font-['Poppins']">

                        {teamData.map((member, index) => (
                            <div key={index} className="relative">

                                <img
                                    src={member.frame}
                                    alt="frame"
                                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                                />

                                <div className="relative px-6 md:px-10 py-8 text-center">

                                    <div className="flex justify-center mb-4 md:mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover"
                                        />
                                    </div>

                                    <h3 className="text-xl md:text-lg font-medium text-[#2AA6B4]">
                                        {member.name}
                                    </h3>

                                    <p className="text-xl md:text-base text-gray-800 font-medium mb-4 md:mb-6">
                                        {member.role}
                                    </p>

                                    <div className="flex justify-center mb-3 md:mb-4">
                                        <img
                                            src={member.quote}
                                            alt="quote"
                                            className="w-5 md:w-6"
                                        />
                                    </div>

                                    <p className="text-gray-600 font-medium text-md md:text-md leading-8 md:leading-7">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam,
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Team;