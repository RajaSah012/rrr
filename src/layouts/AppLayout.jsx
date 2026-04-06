import React, { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AppLayout = ({ children }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/' || location.pathname === '/home';
    const isMusicPage =
  location.pathname === "/" || location.pathname === "/home";

    const audioRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play();
        }

        audioRef.current.muted = !muted;
        setMuted(!muted);
    };

    useEffect(() => {
        if (!audioRef.current) return;

        const isMusicPage =
            location.pathname === "/" || location.pathname === "/home";

        if (!isMusicPage) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setMuted(true);
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen w-full flex flex-col bg-white text-gray-100 selection:bg-blue-500/30">
            {!isHomePage && <Header />}
            <div className="flex-grow flex flex-col">
                {children}
            </div>
            {!isHomePage && <Footer />}

            <audio ref={audioRef} loop muted>
                <source src="/bgmusic.mp3" type="audio/mpeg" />
            </audio>

            {isMusicPage && (
                <i
                    onClick={toggleAudio}
                    className={`${muted ? "ri-volume-mute-fill" : "ri-volume-up-fill"}
    fixed bottom-12 right-10 text-4xl md:text-5xl cursor-pointer hover:scale-110 transition-transform z-[999]`}
                ></i>
            )}
        </div>
    )
}

export default AppLayout