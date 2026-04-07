import React, { useRef, useState } from 'react'
import Button from '../components/button'
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";

const Home2 = () => {
    const navigate = useNavigate();

    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const progress = el.scrollLeft / maxScroll;
        setScrollProgress(progress);
    };

    return (
        <main className="relative w-screen h-screen overflow-hidden">

            {/* MOBILE HEADER */}
            <div className="md:hidden absolute top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* DESKTOP BACKGROUND */}
            <img
                src="/home2.jpg"
                alt="Home"
                className="absolute inset-0 w-full h-full hidden md:block object-fill"
            />

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:block absolute inset-0">
                <Button
                    onClick={() => navigate("/gallery")}
                    className="absolute top-[35%] left-[18%]"
                >
                    Gallery
                </Button>

                <Button
    onClick={() => navigate("/what-makes-us-different")}
    className="absolute top-[30%] left-[45%]"
>
 What's Happening
</Button>
                <Button
                    onClick={() => navigate("/team")}
                    className="absolute top-[45%] left-[31%]"
                >
                    Team
                </Button>
                <Button
                    onClick={() => navigate("/primary-school")}
                    className="absolute top-[45%] left-[55%]"
                >
                    Primary School (IGCSE+CBSE)
                </Button>
                <Button
                    onClick={() => navigate("/primary-school")}
                    className="absolute top-[70%] left-[15%]"
                >
                    Primary School (CBSE)
                </Button>
                <Button
                    onClick={() => navigate("/preschool")}
                    className="absolute top-[85%] left-[40%]"
                >
                    PreSchool
                </Button>
                <Button
                    onClick={() => navigate("/contact-us")}
                    className="absolute top-[80%] left-[70%]"
                >
                    ContactUs
                </Button>
                <Button
                    onClick={() => navigate("/testimonials")}
                    className="absolute top-[50%] left-[80%]"
                >
                    Parents World
                </Button>
            </div>

            {/* MOBILE HORIZONTAL SCROLL */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="md:hidden w-screen h-full overflow-x-auto overflow-y-hidden hide-scrollbar"
            >
                <div className="relative h-full w-[200vw]">

                    <img
                        src="/mhome2.png"
                        alt="Home Mobile"
                        className="absolute inset-0 h-full w-[200vw] object-fill"
                    />

                    <Button
                        onClick={() => navigate("/gallery")}
                        className="absolute top-[26%] left-[15%] -translate-x-1/2 -translate-y-1/2"
                    >
                        Gallery
                    </Button>

                    <Button
    onClick={() => navigate("/what-makes-us-different")}
    className="absolute top-[26%] left-[42%] -translate-x-1/2 -translate-y-1/2"
>
     What's Happening
</Button>
                    <Button
                        onClick={() => navigate("/team")}
                        className="absolute top-[36%] left-[34%] -translate-x-1/2 -translate-y-1/2"
                    >
                        Team
                    </Button>
                    <Button
                        onClick={() => navigate("/primary-school")}
                        className="absolute top-[46%] left-[68%] -translate-x-1/2 -translate-y-1/2 whitespace-pre-line"
                    >
                        {`Primary School\n(IGCSE+CBSE)`}
                    </Button>
                    <Button
                        onClick={() => navigate("/primary-school")}
                        className="absolute top-[58%] left-[20%] -translate-x-1/2 -translate-y-1/2"
                    >
                        Primary School (CBSE)
                    </Button>
                    <Button
                        onClick={() => navigate("/preschool")}
                        className="absolute top-[80%] left-[48%] -translate-x-1/2 -translate-y-1/2"
                    >
                        PreSchool
                    </Button>
                    <Button
                        onClick={() => navigate("/contact-us")}
                        className="absolute top-[78%] left-[89%] -translate-x-1/2 -translate-y-1/2"
                    >
                        ContactUs
                    </Button>
                    <Button
                        onClick={() => navigate("/testimonials")}
                        className="absolute top-[51%] left-[90%] -translate-x-1/2 -translate-y-1/2"
                    >
                        Parents World
                    </Button>

                </div>
            </div>

            {/* MOBILE SCROLL PROGRESS BAR */}
            <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-2.5 p-0.5 bg-white rounded-full">
                <div
                    className="h-full bg-[#5DB6B6] rounded-full transition-all"
                    style={{
                        width: "25%",
                        transform: `translateX(${scrollProgress * 300}%)`
                    }}
                />
            </div>

        </main>
    );
};

export default Home2;