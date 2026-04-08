import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer"

const tabs = ["Primary School", "CBSE"];
const locations = ["All Locations", "Borivali", "MG Road", "Mahavir Nagar"];

const allImages = [
  { src: "/gallery.png", alt: "Preschool classroom activity" },
  { src: "/gallery1.png", alt: "Teacher with children" },
  { src: "/gallery2.png", alt: "Children playing on equipment" },
];


const rows = [
  [
    { imageIndex: 0, flex: "0 0 55%", height: "500px" },
    { imageIndex: 1, flex: "1",       height: "243px" },
    { imageIndex: 2, flex: "1",       height: "243px" },
  ],
  [
    { imageIndex: 2, flex: "1", height: "300px" },
    { imageIndex: 0, flex: "1", height: "300px" },
  ],
  [
    { imageIndex: 2, flex: "1", height: "243px" },
    { imageIndex: 1, flex: "1", height: "243px" },
    { imageIndex: 0, flex: "0 0 55%", height: "500px" },
  ],
  [
    { imageIndex: 1, flex: "1", height: "300px" },
    { imageIndex: 0, flex: "1", height: "300px" },
  ],
];


const stackedColumnRows = {
  0: { mainIndex: 0, stackedIndices: [1, 2], mainFlex: "0 0 55%", height: "500px", stackedHeights: ["243px", "243px"] },
  2: { mainIndex: 2, stackedIndices: [0, 1], mainFlex: "1", height: "500px", stackedHeights: ["243px", "243px"], reverse: true },
};

const useScaleFactor = () => {
  const getScale = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 1;
    if (window.innerWidth >= 640) return 0.55;
    return 0.35;
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const handleResize = () => setScale(getScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
};

const GalleryImage = ({ src, alt, height, hoverId, hovered, onEnter, onLeave, scale }) => {
  const scaledHeight = Math.round(parseInt(height, 10) * scale);
  return (
    <div
      className="rounded-[18px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => onEnter(hoverId)}
      onMouseLeave={onLeave}
    >
      <img
        src={src}
        alt={alt}
        style={{ height: `${scaledHeight}px` }}
        className={`w-full object-cover transition-transform duration-400 ${hovered === hoverId ? "scale-105" : ""}`}
      />
    </div>
  );
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("Primary School");
  const [activeLocation, setActiveLocation] = useState("All Locations");
  const [hovered, setHovered] = useState(null);
  const [images, setImages] = useState(allImages);
  const scale = useScaleFactor();

  useEffect(() => {
    if (activeTab !== "Primary School") {
      setImages((prev) => {
        let shuffled;
        do {
          shuffled = [...allImages].sort(() => Math.random() - 0.5);
        } while (shuffled.every((img, i) => img.src === prev[i].src));
        return shuffled;
      });
    } else {
      setImages(allImages);
    }
  }, [activeTab]);

  let hoverId = 0;

  return (
    <section className="min-h-screen w-full bg-[#FFFAEE] text-[#111]">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero
        bgImage="/gallery3.png"
        tag="Gallery"
        title={<>Little Moments, <br /> Beautiful Memories.</>}
        description="A glimpse into joyful days filled with laughter, learning and unforgettable childhood moments."
      />

      {/* Tabs + Filters */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 pt-8 md:pt-12 pb-0">

        {/* Tabs */}
        <div className="flex gap-6 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setActiveLocation("All Locations"); }}
              className={`px-[18px] py-[8px] rounded-full text-[22px] border-none cursor-pointer outline-none transition-all duration-200 font-['Space_Grotesk'] font-semibold ${
                activeTab === tab ? "bg-[#36A6AE] text-white" : "bg-white text-[#252525]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Location Pills */}
        <div className="flex flex-wrap gap-[10px] mb-9">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-[14px] py-[5px] rounded-full text-lg cursor-pointer outline-none transition-all duration-200 font-['Poppins'] ${
                activeLocation === loc
                  ? "bg-[#ED8F8F] text-white border-none"
                  : "bg-white text-[#ED8F8F] border-[1.5px] border-[#ED8F8F]"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 pb-16">
        <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px]">

          {/* ROW 1: large left + two stacked right */}
          <div className="flex gap-[8px] sm:gap-[12px] md:gap-[14px] items-stretch">
            <GalleryImage
              src={images[0].src} alt={images[0].alt}
              height="500px"
              hoverId={hoverId}
              hovered={hovered}
              onEnter={setHovered}
              onLeave={() => setHovered(null)}
              scale={scale}
            />
            <div className="flex-1 flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px]">
              {[images[1], images[2]].map((img, i) => (
                <GalleryImage
                  key={i}
                  src={img.src} alt={img.alt}
                  height="243px"
                  hoverId={++hoverId}
                  hovered={hovered}
                  onEnter={setHovered}
                  onLeave={() => setHovered(null)}
                  scale={scale}
                />
              ))}
            </div>
          </div>

          {/* ROW 2: two equal columns */}
          <div className="flex gap-[8px] sm:gap-[12px] md:gap-[14px] items-stretch">
            {[images[2], images[0]].map((img, i) => (
              <GalleryImage
                key={i}
                src={img.src} alt={img.alt}
                height="300px"
                hoverId={++hoverId}
                hovered={hovered}
                onEnter={setHovered}
                onLeave={() => setHovered(null)}
                scale={scale}
              />
            ))}
          </div>

          {/* ROW 3: two stacked left + large right */}
          <div className="flex gap-[8px] sm:gap-[12px] md:gap-[14px] items-stretch">
            <div className="flex-1 flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px]">
              {[images[2], images[1]].map((img, i) => (
                <GalleryImage
                  key={i}
                  src={img.src} alt={img.alt}
                  height="243px"
                  hoverId={++hoverId}
                  hovered={hovered}
                  onEnter={setHovered}
                  onLeave={() => setHovered(null)}
                  scale={scale}
                />
              ))}
            </div>
            <GalleryImage
              src={images[0].src} alt={images[0].alt}
              height="500px"
              hoverId={++hoverId}
              hovered={hovered}
              onEnter={setHovered}
              onLeave={() => setHovered(null)}
              scale={scale}
            />
          </div>

          {/* ROW 4: two equal columns */}
          <div className="flex gap-[8px] sm:gap-[12px] md:gap-[14px] items-stretch">
            {[images[1], images[0]].map((img, i) => (
              <GalleryImage
                key={i}
                src={img.src} alt={img.alt}
                height="300px"
                hoverId={++hoverId}
                hovered={hovered}
                onEnter={setHovered}
                onLeave={() => setHovered(null)}
                scale={scale}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Video / Promo Section */}
      <div className="max-w-[1280px] mx-auto px-12 pt-6 pb-20">
        <div className="relative bg-white rounded-[22px] p-14 mb-20 grid grid-cols-2 gap-10 items-center overflow-hidden">

          {/* Frame */}
          <img
            src="/gallery video frame.png"
            alt="frame"
            className="absolute inset-0 w-full h-full pointer-events-none z-0 object-fill"
          />

          {/* Text */}
          <div className="relative z-10 max-w-[500px]">
            <h2 className="text-[40px] text-black leading-[1.7] mb-6 font-['Balsamiq_Sans'] tracking-tight">
              Raising Right Education -<br />Re-imagined
            </h2>
            <p className="text-[#565B66] text-lg font-medium leading-[1.8] tracking-wide max-w-[430px] font-['Poppins']">
              Discover how we're transforming early childhood education with love,
              innovation, and a commitment to nurturing every child's unique potential.
            </p>
          </div>

          {/* Video */}
          <div className="relative w-full aspect-square rounded-[30px] overflow-hidden z-10 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oi_1A2TrSaY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-[30px]"
            />
          </div>

        </div>
      </div>

      <Footer />

    </section>
  );
};

export default Gallery;
