import React from 'react'
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import data from "../../data/primarySchoolData.json";

export default function index() {

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
                 bgImage="/PrimarySchool.png"
                tag="Primary School"
                title={
                    <>
                        Where Curiosity <br />
                        Leads The Way
                    </>
                }
                description="Modern Parents struggling with one-size-fits-all education, looking transparent communication, RaisingRight delivers curiosity driven skill based alternate education, am which integrates seamlessly with mainstream schooling."
            />
   
<div className="max-w-screen-xl mx-auto px-8 py-14 md:py-20">
  <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

    <div className="relative flex justify-center order-1 md:order-none">
      <div className="relative w-[300px] sm:w-[330px] md:w-[400px] h-auto md:h-[480px]">
        <img src="/frame36.png" alt="classroom" className="w-full h-full object-contain" />
        <img src="/flower.png" alt="flower" className="absolute -bottom-6 -right-1 md:-bottom-5 md:-right-10 w-20 md:w-24 z-20" />
      </div>
    </div>

    <div className="p-3 md:p-6 order-2 md:order-none">
      <h2 className="text-[1.6rem] md:text-[2.6rem] leading-snug mb-5 text-[#E68C8C] font-['Balsamiq_Sans']">
        What Makes Us <br /> Different
      </h2>
      <p className="text-gray-600 font-medium text-[0.85rem] md:text-[1.05rem] leading-[2.6] md:leading-[1.9] tracking-wide font-['Poppins'] mb-7">
        At Raising Right Education, we believe education should feel expansive,
        inspiring and deeply personal. Our approach combines structured academics
        with creative exploration and emotional wellbeing, ensuring children grow
        not only in knowledge but in confidence and character.
      </p>
      <ul className="space-y-3 md:space-y-5">
        {[
          "Experiential & Hands-On Learning",
          "Balanced Academics & Wellbeing",
          "Safe, Nurturing Environment",
          "Strong Community & Parent Involvement",
          "Spaces Designed to Inspire Curiosity",
        ].map((point, i) => (
          <li key={i} className="flex items-start gap-3 font-medium text-[0.85rem] md:text-[1.05rem] text-gray-700">
            <img src="/iconoir_badge-check.png" alt="" className="w-5 md:w-6 h-5 md:h-6 mt-[3px]" />
            {point}
          </li>
        ))}
      </ul>
    </div>

  </div>
</div>

{/* Section Heading */}
<div className="w-full flex justify-center px-6 py-6">
  <h2 className="text-[1.9rem] md:text-[3.2rem] leading-tight mb-4 text-[#E68C8C] font-['Balsamiq_Sans'] text-center">
    <span className="block md:whitespace-nowrap">Primary School -</span>
    <span className="block md:whitespace-nowrap">A New Perspective on Learning</span>
  </h2>
</div>

{/* 2-Column Info Cards */}
<div className="max-w-screen-xl mx-auto px-8 py-4 md:py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-stretch">

    <div className="relative">
      <img src="/primary school frame.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" />
      <img src="/mprimaryframe.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none md:hidden" />
      <div className="relative p-7 md:p-10">
        <h3 className="text-[1.15rem] md:text-[1.4rem] mb-3 md:mb-5 font-['Balsamiq_Sans']">
          Integrated Excellence
        </h3>
        <p className="text-gray-700 text-[0.85rem] md:text-[1.05rem] leading-[2.6] md:leading-[2.1] font-medium tracking-wide font-['Poppins']">
          Our curriculum seamlessly blends CBSE standards with globally recognized
          inquiry-based methods. This dual approach ensures that students are not
          just meeting benchmarks, but are actively engaging with the 'why' and
          'how' of their education.
        </p>
      </div>
    </div>

    <div className="relative">
      <img src="/primary school frame.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none hidden md:block" />
      <img src="/mprimaryframe.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none md:hidden" />
      <div className="relative p-7 md:p-10">
        <h3 className="text-[1.15rem] md:text-[1.4rem] text-gray-800 mb-3 md:mb-5 font-['Balsamiq_Sans']">
          Open Exploration
        </h3>
        <p className="text-gray-700 text-[0.85rem] md:text-[1.05rem] leading-[2.6] md:leading-[2.1] font-medium tracking-wide font-['Poppins']">
          Every Friday, the schedule opens up for student-led inquiry. This "Open
          Exploration" slot allows children to dive deep into personal projects,
          interests, and collaborative problem-solving that transcends traditional
          subject silos.
        </p>
      </div>
    </div>

  </div>
</div>

{/* Dynamic Sections */}
<div className="min-h-fit w-full bg-[#FFF] py-12 md:py-20 space-y-14 md:space-y-24 overflow-hidden px-8 md:px-10">
  {data.map((item, index) => {
    const isLeft = item.align === "left";
    return (
      <div key={index} className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-14">

        {isLeft && (
          <div className="relative flex justify-center md:justify-start md:-ml-1 order-1 md:order-none">
            <div
              className="relative w-[300px] sm:w-[340px] md:w-[480px] h-[300px] sm:h-[340px] md:h-[480px] rounded-full overflow-hidden z-10"
              style={{ boxShadow: `22px 18px 0px ${item.shadowColor}` }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </div>
            <div className="absolute -bottom-2 -left-20 md:-bottom-1 md:-left-40 z-0 scale-75 md:scale-100">
              <Wave />
            </div>
          </div>
        )}

        <div className="max-w-xl order-2 md:order-none">
          <h2 className="text-[1.5rem] md:text-[2.8rem] font-medium leading-snug mb-5 font-['Balsamiq_Sans']">
            {item.title}
          </h2>
          <p className="text-gray-600 text-[0.85rem] md:text-[1.15rem] leading-[2.6] font-medium md:leading-[1.9] tracking-wide font-['Poppins']">
            {item.description}
          </p>
        </div>

        {!isLeft && (
          <div className="relative flex justify-center md:justify-end md:-mr-1 order-1 md:order-none">
            <div
              className="relative w-[300px] sm:w-[340px] md:w-[480px] h-[300px] sm:h-[340px] md:h-[480px] rounded-full overflow-hidden z-10"
              style={{ boxShadow: `-22px 18px 0px ${item.shadowColor}` }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 right-0 md:-bottom-1 md:-right-10 z-0 scale-75 md:scale-100">
              <Wave />
            </div>
          </div>
        )}

      </div>
    );
  })}
</div>

{/* Beyond Academics */}
<div className="max-w-screen-xl mx-auto px-8 py-8 md:py-20">
  <h2 className="text-center text-[1.9rem] md:text-[3.2rem] text-[#E68C8C] mb-10 md:mb-14 font-['Balsamiq_Sans']">
    Beyond Academics
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
    {[
      { icon: "./prime_trophy.png", title: "Turfs", desc: "3 big turfs for activities like Cricket & Soccer" },
      { icon: "./fluent_swimming-pool-24-regular.png", title: "Swimming Pool", desc: "Swimming pool and Zen garden for meditation" },
      { icon: "./iconoir_basketball-field.png", title: "Dedicated Playground", desc: "Playground with basket ball court and for Kabaddi" },
      { icon: "./octicon_beaker-24.png", title: "Science Lab", desc: "Fully Equipped 3D Science Lab" },
      { icon: "./bx_first-aid.png", title: "Safe Rest Areas", desc: "Infirmary to cater to first aid and resting space" },
      { icon: "./streamline-plump_fork-plate.png", title: "Banquet", desc: "1000 seating capacity Banquet" },
    ].map((item, i) => (
      <div key={i} className="relative">
        <img src="/beyond academics frame.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none hidden md:block" />
        <img src="/mprimaryframe2.png" alt="frame" className="absolute inset-0 w-full h-full object-fill pointer-events-none md:hidden" />
        <div className="relative p-5 md:p-7 py-10 md:py-9 text-center flex flex-col items-center justify-start">
          <img src={item.icon} alt="" className="w-8 md:w-auto mb-3" />
          <h3 className="text-[1rem] md:text-[1.15rem] font-semibold text-[#31A6AE] mb-2 font-['Poppins']">
            {item.title}
          </h3>
          <p className="text-gray-900 font-medium md:font-normal text-[0.95rem] md:text-[1.1rem] font-['Poppins']">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Fees Section */}
<div className="relative w-full mt-8 pt-8 md:min-h-screen flex items-center justify-center">
  <img src="/primaryschoolbg.png" alt="fees background" className="hidden md:block absolute inset-0 w-full h-full object-contain" />
  <img src="/zigzag1.png" alt="zigzag-top-mobile" className="md:hidden absolute -top-10 left-0 w-full h-full object-cover pointer-events-none z-10" />
  <img src="/zigzag2.png" alt="zigzag-bottom-mobile" className="md:hidden absolute bottom-0 left-0 w-full h-full object-cover pointer-events-none" />

  <div className="relative z-10 mx-auto text-center py-14 md:py-18 px-8">
    <h2 className="text-[1.9rem] md:text-[3rem] text-[#E68C8C] mb-7 md:mb-10 font-['Space_Grotesk'] font-semibold">
      Fees Structure
    </h2>
    <p className="text-[1.35rem] md:text-[2.2rem] font-['Balsamiq_Sans'] text-center max-w-xl mx-auto leading-snug">
      Grade 1st Fees : 1,50,000 with 10% increases every year.
    </p>
    <div className="mt-7 md:mt-9 text-center md:text-left inline-block space-y-4">
      <div className="flex items-start justify-center md:justify-start gap-3">
        <span className="text-gray-600 text-lg mt-0.5">•</span>
        <p className="text-gray-600 font-medium text-[0.85rem] md:text-[1.05rem] leading-relaxed font-['Poppins'] max-w-xs md:max-w-none">
          Additional charges - Learners kit and Uniforms.
        </p>
      </div>
      <div className="flex items-start justify-center md:justify-start gap-3">
        <span className="text-gray-600 text-lg mt-0.5">•</span>
        <p className="text-gray-600 font-medium text-[0.85rem] md:text-[1.05rem] leading-relaxed font-['Poppins'] max-w-xs md:max-w-none">
          Optional - Meal (Breakfast/Lunch) and Bus
        </p>
      </div>
    </div>
  </div>
</div>

{/* Visit Us */}
<div className="max-w-screen-xl mx-auto px-8 py-8 md:py-20 flex flex-col items-center">
  <h2 className="text-center text-[2.2rem] md:text-[3.2rem] text-[#E68C8C] mb-5 font-['Balsamiq_Sans']">
    Visit Us
  </h2>
  <p className="text-center font-medium text-[1.1rem] md:text-[1.25rem] mb-10 font-['Poppins'] max-w-2xl">
    Do come and visit our campus to experience our vision for the future of education.
  </p>
  <div className="relative w-full max-w-7xl">
    <img src="/mapframe.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none z-0 object-fill hidden md:block" />
    <img src="/mmapframe.png" alt="frame" className="absolute inset-0 w-full h-full pointer-events-none z-0 object-fill md:hidden" />
    <div className="relative p-[2%] md:p-[1%] z-20 h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0!2d72.84!3d19.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUmFpc2luZ1JpZ2h0!5e0!3m2!1sen!2sin!4v1"
        width="100%"
        height="100%"
        className="rounded-[16px]"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Raising Right Location"
      ></iframe>
    </div>
  </div>
</div>
    <Footer/>
    </section>


  )
}
