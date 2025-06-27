import React from "react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerBg from "../assets/banner-bg.webp";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      <div
        className="min-h-[85vh] flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <SwiperSlide>
          <div
            className="px-15 min-h-[85vh] flex justify-center"
            style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <div className="flex flex-col justify-center items-center gap-5 max-w-1/2 text-center">
              <h2 className="text-7xl font-semibold">
                Earn Money with Your Skills
              </h2>
              <p className="text-2xl font-medium">
                Turn your expertise into income with flexible freelance
                opportunities
              </p>
              <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
                Whether you're a developer, designer, writer, or marketer, find
                high-paying projects that match your skills and schedule. Start
                earning today.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Start Freelancing
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="px-15 min-h-[85vh] flex justify-center"
            style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <div className="flex flex-col justify-center items-center gap-5 max-w-1/2 text-center">
              <h2 className="text-7xl font-semibold">
                Post Tasks, Get Results Fast
              </h2>
              <p className="text-2xl font-medium">
                Describe your project and receive proposals from qualified professionals
              </p>
              <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
                Our intelligent matching system connects you with the right freelancers based on your project requirements, budget, and timeline.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Start Freelancing
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="px-15 min-h-[85vh] flex justify-center"
            style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <div className="flex flex-col justify-center items-center gap-5 max-w-1/2 text-center">
              <h2 className="text-7xl font-semibold">
                Find Expert Freelancers for Every Project
              </h2>
              <p className="text-2xl font-medium">
                Connect with skilled professionals ready to bring your ideas to life
              </p>
              <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
                From web development to graphic design, find the perfect freelancer for your next project. Join thousands of satisfied clients who've found success on our platform.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Start Freelancing
              </button>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
