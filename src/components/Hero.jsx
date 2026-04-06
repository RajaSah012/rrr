import React from "react";

const Hero = ({ bgImage, tag, title, description }) => {
    return (
        <div
            className="
                relative w-full 
                min-h-[89vh] md:h-[102vh]
                bg-center bg-cover bg-no-repeat 
                flex items-center justify-center 
                text-center 
                px-4 md:px-6
                pt-20 md:pt-0
            "
        >
            <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            <div className="relative max-w-3xl">
                {tag && (
                    <p
                        className="
                            text-pink-500 
                            font-medium 
                            text-xl md:text-3xl
                            mb-2 md:mb-3
                            font-['Poppins']
                        "
                    >
                        {tag}
                    </p>
                )}

                <h1
                    className="
                        text-3xl sm:text-4xl md:text-6xl
                        font-medium 
                        leading-snug md:leading-tight
                        mb-4 md:mb-6
                        font-space-grotesk
                    "
                >
                    {title}
                </h1>

                {description && (
                    <p
                        className="
                            text-[#1C1C1C] 
                            text-base sm:text-lg md:text-2xl
                            max-w-xl md:max-w-3xl
                            mx-auto
                            font-['Poppins'] 
                            leading-relaxed md:leading-[1.6]
                            tracking-wide
                        "
                    >
                        {description}
                    </p>
                )}
                <div className="h-20 md:h-40"></div>
            </div>
        </div>
    );
};

export default Hero;
