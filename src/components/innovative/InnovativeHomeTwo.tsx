import React from "react";
import Image from "next/image";
import image from "@/assets/img/modern_digital_need.jpg";

interface DataType {
  title_1: string;
  des_1: string;
  title_2: string;
  des_2: string;
  features: {
    id: number;
    title: string;
    des: string;
  }[];
}

const innovative_data: DataType = {
  title_1: `Innovative Solutions for the Digital Era`,
  des_1: `We craft tailored digital strategies to help businesses thrive online — from engaging website design and development to performance-driven marketing campaigns.`,
  title_2: `Building a Memorable Brand Identity`,
  des_2: `Our creative team focuses on delivering impactful designs and strategies that connect with your audience and strengthen your brand presence.`,
  features: [
    {
      id: 1,
      title: `Creative Ideation`,
      des: `Turning unique concepts into powerful digital experiences.`,
    },
    {
      id: 2,
      title: `Smart Development`,
      des: `Building scalable, high-performance websites and applications.`,
    },
    {
      id: 3,
      title: `Growth Marketing`,
      des: `Driving visibility, engagement, and conversions through data-driven campaigns.`,
    },
  ],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

const InnovativeHomeTwo = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_modern_needs cs_style">
            <div className="cs_col_md_778">
              <div className="cs_text">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_heading_title">
                      {title_1}
                    </h2>
                  </div>
                </div>
                <div className="cs_height_65"></div>
                <p className="anim_text">{des_1}</p>
              </div>
              <div className="cs_height_85"></div>
              <div className="row anim_div_ShowLeftSide">
                {features.map((item, i) => (
                  <div className="col-md-4 col-12" key={i}>
                    <div className="cs_stroke_text">
                      <span>{item.id}</span>
                    </div>
                    <div className="text-section">
                      <h6>{item.title}</h6>
                      <p>{item.des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs_col_md_672">
              <div className="cs_img_section">
                <Image src={image} alt="modern_digital_need" />
                <div className="cs_img_card_text anim_div_ShowZoom">
                  <h6 className="cs_color_style">{title_2}</h6>
                  <p>{des_2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovativeHomeTwo;
