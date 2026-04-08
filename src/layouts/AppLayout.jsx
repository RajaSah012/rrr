import React, { useRef, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

const AppLayout = ({ children }) => {
    const location = useLocation();
    const isMusicPage =
        location.pathname === "/" || location.pathname === "/home";

    const audioRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const volumeIcon = muted ? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 md:h-10 md:w-10">
            <path d="M14 3.23a1 1 0 0 1 1.6.8v15.94a1 1 0 0 1-1.6.8L8.67 16.5H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.67L14 3.23Z" />
            <path d="M19.78 8.8a1 1 0 0 1 0 1.4L17.98 12l1.8 1.8a1 1 0 1 1-1.41 1.4l-1.8-1.79-1.79 1.8a1 1 0 1 1-1.41-1.42l1.8-1.79-1.8-1.8a1 1 0 0 1 1.41-1.4l1.79 1.79 1.8-1.8a1 1 0 0 1 1.41 0Z" />
        </svg>
    ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 md:h-10 md:w-10">
            <path d="M14 3.23a1 1 0 0 1 1.6.8v15.94a1 1 0 0 1-1.6.8L8.67 16.5H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.67L14 3.23Z" />
            <path d="M17.5 7.5a1 1 0 0 1 1.41 0 6 6 0 0 1 0 8.49 1 1 0 1 1-1.41-1.42 4 4 0 0 0 0-5.65 1 1 0 0 1 0-1.42Z" />
            <path d="M19.62 5.38a1 1 0 0 1 1.41 0 9 9 0 0 1 0 12.73 1 1 0 0 1-1.41-1.42 7 7 0 0 0 0-9.89 1 1 0 0 1 0-1.42Z" />
        </svg>
    );

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
        if (!isMusicPage) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setMuted(true);
        }
    }, [location.pathname]);

    return (
        <div className="min-h-screen w-full flex flex-col bg-white text-gray-100 selection:bg-blue-500/30">
            <div className="flex-grow flex flex-col">
                {children}
            </div>
            <audio ref={audioRef} loop muted preload="none">
                <source src="/bgmusic.mp3" type="audio/mpeg" />
            </audio>
            {isMusicPage && (
                <button
                    onClick={toggleAudio}
                    type="button"
                    aria-label={muted ? "Unmute background music" : "Mute background music"}
                    className="fixed bottom-12 right-10 cursor-pointer text-white hover:scale-110 transition-transform z-[999]"
                >
                    {volumeIcon}
                </button>
            )}
        </div>
    );
}

export default AppLayout;
