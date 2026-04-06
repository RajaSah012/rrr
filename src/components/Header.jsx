import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-6 flex justify-between items-center shadow-[inset_0_70px_30px_rgba(244,239,234,0.9)]">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/icon.png" alt="Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                    <span className="text-xl font-bold text-black font-['Space_Grotesk']">
                        RaisingRight
                    </span>
                </Link>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-2xl md:text-4xl leading-none text-black z-50"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    <span>{open ? "✕" : "≡"}</span>
                </button>
            </header>

            {open && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                className={`fixed top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-40 transition-all duration-500 origin-top ${open
                    ? "scale-100 opacity-100 pointer-events-auto"
                    : "scale-0 opacity-0 pointer-events-none"
                    }`}
            >
                <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">

                    <div
                        className="absolute inset-0 rounded-full border-[4px] md:border-[5px] border-[#F3CB50] shadow-[0_0_0_3px_#F3CB50] md:shadow-[0_0_0_4px_#F3CB50]"
                        style={{
                            backgroundImage: "url('/paper-texture.png')",
                            backgroundColor: "#fdf8f0",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5">

                        {[
                            { label: "Home", to: "/" },
                            { label: "Preschool", to: "/preschool" },
                            { label: "Primary School", to: "/primary-school" },
                            { label: "Testimonials", to: "/testimonials" },
                            { label: "Gallery", to: "/gallery" },
                            { label: "Team", to: "/team" },
                            { label: "Contact Us", to: "/contact-us" },
                        ].map(({ label, to }) => (
                            <Link
                                key={to}
                                to={to}
                                onClick={() => setOpen(false)}
                                className="text-[15px] md:text-[17px] font-semibold text-gray-800 hover:text-[#e05a8a] hover:scale-110 transition-all duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
