import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button', ...props }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
            px-5 py-2.5 md:px-8 md:py-3.5
           bg-[#395064] 
            hover:brightness-120
            text-white
            text-xs md:text-sm lg:text-base
            text-left
            font-medium
            cursor-pointer
            rounded-full
            shadow-lg
            hover:shadow-xl
            transition-all
            duration-400
            ease-in-out
            hover:scale-115
            active:scale-100
            whitespace-no
            leading-tight
            ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
