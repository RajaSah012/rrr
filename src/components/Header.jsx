import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuItems = [
        { label: "Home", to: "/" },
        { label: "Preschool", to: "/preschool" },
        { label: "Primary School (Integrated)", to: "/primary-school" },
        { label: "Primary School (CBSE)", to: "/primary-school" },
        { label: "What's Happening", to: "/what-makes-us-different" },
        { label: "Testimonials", to: "/testimonials" },
        { label: "Gallery", to: "/gallery" },
        { label: "Team", to: "/team" },
        { label: "Contact Us", to: "/contact-us" },
    ];

    return (
        <>
            {/* HEADER */}
            <header className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-6 flex justify-between items-center shadow-[inset_0_70px_30px_rgba(244,239,234,0.9)]">
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/icon.png"
                        alt="Logo"
                        className="w-8 h-8 md:w-12 md:h-12 object-contain"
                    />
                    <span className="text-xl font-bold text-black font-['Space_Grotesk']">
                        RaisingRight
                    </span>
                </Link>

                {/* MENU BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    className="flex h-11 w-11 items-center justify-center text-black z-50"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? (
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <path d="M6 6L18 18" />
                            <path d="M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <path d="M4 7H20" />
                            <path d="M4 12H20" />
                            <path d="M4 17H20" />
                        </svg>
                    )}
                </button>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* CIRCULAR MENU */}
            <div
                className={`fixed top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-40 transition-all duration-500 origin-top ${
                    open
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-0 opacity-0 pointer-events-none"
                }`}
            >
                <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] flex items-center justify-center">
                    {/* BACKGROUND CIRCLE */}
                    <div
                        className="absolute inset-0 rounded-full border-[4px] md:border-[5px] border-[#F3CB50] shadow-[0_0_0_3px_#F3CB50] md:shadow-[0_0_0_4px_#F3CB50]"
                        style={{
                            backgroundImage: "url('/paper-texture.png')",
                            backgroundColor: "#fdf8f0",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    {/* MENU ITEMS */}
                    <div className="relative z-10 flex flex-col items-center gap-3 md:gap-5">
                        {menuItems.map(({ label, to }) => (
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
