"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "https://images.pexels.com/photos/3149896/pexels-photo-3149896.jpeg?_gl=1*188vphi*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkyODY4JGozMSRsMCRoMA..",
    sub_title: "Our Mission",
    title: `Our Mission at SEO Company Orange County`,
    des: `It's our mission at SEO Company Orange County to help bring Christmas to every child in LA and Orange County. In 2023 and 2024 we donated 10% of all sales to help make Christmas a little more special for children in need. 
For 2025 we are prepared to do the same and will use 10% of all sales towards responding to letters mailed to Santa. `,
  },
  {
    img: "https://images.pexels.com/photos/2564252/pexels-photo-2564252.jpeg?_gl=1*5rm3zr*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkyOTUxJGo0MSRsMCRoMA..",
    sub_title: "Who We Are",
    title: `Professional SEO Solutions Tailored for Your Business`,
    des: `At SEO Company Orange County, we are a team of dedicated SEO specialists, content strategists, and digital marketers committed to driving measurable results. Our expertise lies in helping businesses improve their online visibility, outrank competitors, and attract qualified leads through proven SEO strategies.`,
  },
  {
    img: "https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg?_gl=1*1qgk3c5*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkzMDYxJGoxNCRsMCRoMA..",
    sub_title: "What We Do",
    title: `Delivering Growth Through Data-Driven SEO`,
    des: `We combine technical SEO, keyword research, content optimization, and link-building strategies to deliver long-term success. Whether you’re a local business or a large enterprise, our goal is to create a powerful online presence that fuels traffic, builds authority, and maximizes ROI.`,
  },
];

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${" / "}
             <span class="${totalClass}"></span>`;
          },
        }}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div
                className="cs_about_bg cs_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title">{item.title}</h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  <p className="cs_m0">{item.des}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_prev"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="cs_swiper_button_next"
              >
                <svg
                  width="82"
                  height="24"
                  viewBox="0 0 82 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;
