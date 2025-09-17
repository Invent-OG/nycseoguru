"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: `https://images.pexels.com/photos/8145247/pexels-photo-8145247.jpeg?_gl=1*169w0ii*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkwNDM3JGoyMiRsMCRoMA..`,
    sub_title: "SEO Company",
    title: "Boost Your Rankings & Online Visibility",
    des: `Drive more traffic, leads, and sales with our proven SEO strategies. We help businesses dominate search engines through keyword optimization, content marketing, and technical SEO. Let us take your website to the top of Google and beyond.`,
  },
  {
    img: `https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?_gl=1*1xg75zi*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkwNDk1JGo0MCRsMCRoMA..`,
    sub_title: "SEO Experts",
    title: "Grow Your Business with Targeted SEO Solutions",
    des: `Our team of SEO professionals crafts data-driven strategies to improve your search rankings and attract your ideal audience. From local SEO to enterprise solutions, we deliver measurable results that fuel sustainable growth.`,
  },
  {
    img: `https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?_gl=1*1azwyt1*_ga*MTc0MTUyODg5Mi4xNzUyNzM0NTIy*_ga_8JE65Q40S6*czE3NTgwOTAzOTkkbzIzJGcxJHQxNzU4MDkwNTM5JGo2MCRsMCRoMA..`,
    sub_title: "Digital Marketing & SEO",
    title: "Smart SEO for Real Business Growth",
    des: `We combine SEO, content, and digital marketing to give your business a competitive edge. With a focus on ROI, we optimize every aspect of your online presence to ensure long-term visibility and consistent conversions.`,
  },
];

const HeroHomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title">
                    <svg
                      width="134"
                      height="12"
                      viewBox="0 0 134 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010"
                      />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title">{item.title}</h1>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">{item.des}</div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Our Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default HeroHomeOne;
