import React from "react";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const sectionHeading = "text-2xl md:text-4xl font-['Balsamiq_Sans'] text-[#E68C8C]";

const eligibilityItems = [
    "You must be over the legal age to use or subscribe to this application/website in your jurisdiction, or a minimum age of 13 years.",
    "You may not use our products for any illegal or unauthorized purpose, nor violate any laws in your jurisdiction."
];

const terminationCards = [
    {
        title: "Business Protection",
        desc: "Raisingright.education may terminate any account if the user's activities pose a reasonable risk to business operations."
    },
    {
        title: "Data Discretion",
        desc: "We reserve the right to deactivate accounts and delete all account data at our sole discretion without prior notice."
    },
    {
        title: "Policy Enforcement",
        desc: "Our team enforces account termination in cases of exceptional misconduct or when a user is in abuse of these terms."
    }
];

const ipSections = [
    {
        title: "Trademarks",
        points: [
            "Raisingright.education logos, websites, trading names, and product names are or may be trademarks pending registration.",
            "You may not use any trademarked material without written permission."
        ]
    },
    {
        title: "Copyright",
        points: [
            "All material published on this website is the copyright of Raisingright.education or its licensee.",
            "You may not reproduce, publish, sell, modify, or copy any website content, designs, text, graphics, or code without written permission.",
            "Raisingright.education and its licensors retain ownership of all intellectual property rights related to the Information and Software."
        ]
    }
];

const thirdPartyCards = [
    {
        title: "Liability Disclaimer",
        desc: "We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services that you visit"
    },
    {
        title: "External Redirection",
        desc: "Our Service may contain links to other websites not operated by us; clicking these links will direct you to an external third-party site."
    }
];

const FrameImage = ({ desktop, mobile, alt = "frame" }) => (
    <>
        <img src={desktop} alt={alt} className="absolute inset-0 w-full h-full object-fill pointer-events-none hidden md:block" />
        <img src={mobile} alt={alt} className="absolute inset-0 w-full h-full object-fill pointer-events-none md:hidden" />
    </>
);

const TermsConditions = () => {
    return (
        <section className="min-h-screen w-full bg-[#FFFAEE] text-gray-900">
            <Header />

            <Hero
                bgImage="/tnc.png"
                mobileBgImage="/mtnc.png"
                tag=""
                title={<>Terms & Conditions</>}
                description="Fostering a safe and respectful learning journey with clear guidelines, mutual trust, and shared responsibility."
            />

            <div className="max-w-screen-xl mx-auto py-16 px-6 md:py-24 md:px-8 space-y-16 md:space-y-20">

                {/* Introduction */}
                <div className="relative w-full">
                    <FrameImage desktop="/pnp1.png" mobile="/mpnp1.png" />
                    <div className="relative py-32 px-8 md:p-14 text-center">
                        <h2 className={`${sectionHeading} mb-4 md:mb-6`}>Introduction</h2>
                        <p className="font-['Balsamiq_Sans'] font-medium text-xl leading-[2] max-w-2xl mx-auto">
                            Welcome to RaisingRight.Education. By accessing or using our application or website, you agree to comply with and be bound by these Terms & Conditions.
                        </p>
                    </div>
                </div>

                {/* User Eligibility */}
                <div className="text-center">
                    <h2 className={`${sectionHeading} mb-10 md:mb-12`}>User Eligibility</h2>
                    <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                        {eligibilityItems.map((text, i) => (
                            <div key={i} className="relative">
                                <FrameImage desktop="/pnp2.png" mobile="/mpnp2.png" />
                                <div className="relative p-6 md:p-8 text-left">
                                    <p className="font-['Poppins'] font-medium text-sm md:text-base leading-[2] text-gray-500">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Account Termination */}
                <div className="text-center">
                    <h2 className={`${sectionHeading} mb-10 md:mb-12`}>Account Termination</h2>
                    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                        {terminationCards.map((item, i) => (
                            <div key={i} className="relative">
                                <FrameImage desktop="/tnc3.png" mobile="/mpnp3.png" />
                                <div className="relative p-6 md:p-8 text-center">
                                    <h3 className="font-['Poppins'] font-semibold text-xl text-[#31A6AE] mb-3 md:mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="font-['Poppins'] text-sm md:text-base text-black tracking-[0.2px] leading-[2.2] md:leading-[1.8]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intellectual Property */}
                <div className="relative w-full">
                    <FrameImage desktop="/tnc4.png" mobile="/mpnp4.png" />
                    <div className="relative p-8 md:p-16 text-center max-w-3xl mx-auto">
                        <h2 className={`${sectionHeading} mb-8 md:mb-10`}>Intellectual Property Rights</h2>
                        <div className="space-y-10">
                            {ipSections.map((section, i) => (
                                <div key={i} className="space-y-5">
                                    <h3 className="font-['Poppins'] font-semibold text-md text-black">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3 max-w-2xl mx-auto text-left">
                                        {section.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2 font-['Poppins'] text-sm md:text-base leading-[2] text-gray-700">
                                                <span className="mt-[2px]">•</span>
                                                <span className="leading-[2]">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Third-Party Links */}
                <div className="text-center">
                    <h2 className={`${sectionHeading} mt-16 md:mt-20 mb-10 md:mb-12`}>Third-Party Links</h2>
                    <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                        {thirdPartyCards.map((item, i) => (
                            <div key={i} className="relative">
                                <FrameImage desktop="/tnc5.png" mobile="/mpnp5.png" />
                                <div className="relative p-6 md:p-8">
                                    <h3 className="font-['Balsamiq_Sans'] font-semibold text-lg md:text-xl text-black text-left mb-3 md:mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="font-['Poppins'] text-sm md:text-base text-gray-600 text-left leading-[2] md:leading-[1.9]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Changes to Terms */}
                <div className="relative w-full mt-16 md:mt-20">
                    <FrameImage desktop="/tnc6.png" mobile="/mpnp6.png" />
                    <div className="relative p-8 md:p-10 text-center max-w-3xl mx-auto">
                        <h2 className={`${sectionHeading} mb-6 md:mb-8`}>Changes to Terms</h2>
                        <p className="font-['Poppins'] font-medium text-sm md:text-base text-gray-600 leading-[2] md:leading-[2.4]">
                            We may update our terms and policies from time to time. We will notify you of any
                            changes by posting the updated version on this page. We will also provide notice
                            via email or a prominent announcement on our service before the change becomes effective.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default TermsConditions;