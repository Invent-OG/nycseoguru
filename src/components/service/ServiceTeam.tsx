
"use client"

import React from 'react';
import Count from '../common/Count';


interface DataType {
  id: number;
  count: number;
  title: string;
  des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    count: 99,
    title: `Market Research`,
    des: `We conduct in-depth research to understand your audience, competitors, and industry trends, ensuring data-driven strategies for growth.`,
  },
  {
    id: 2,
    count: 85,
    title: `Prototyping`,
    des: `Our team builds interactive prototypes that bring ideas to life, helping you visualize user journeys before final development.`,
  },
  {
    id: 3,
    count: 80,
    title: `Visual Design`,
    des: `We craft engaging and modern user interfaces that combine creativity with functionality to deliver seamless digital experiences.`,
  },
  {
    id: 4,
    count: 99,
    title: `Creative Solutions`,
    des: `From strategy to execution, we provide innovative solutions that solve complex problems and empower your business to succeed.`,
  },
];


const ServiceTeam = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title_2 anim_heading_title">
                Skill & Specialist
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="cs_team_details cs_funfact">

            {service_data.map((item, i) =>
              <div key={i} className="cs_funfact_max_w">
                <div className="cs_funfact cs_style1">
                  <div className="cs_stroke_text me-4">
                    <span className="amin_auto_count d-flex">
                      <Count number={item.count} /> %
                      </span>
                  </div>
                  <div className="cs_height_55 cs_height_lg_25"></div>
                  <div className="">
                    <h6>{item.title}</h6>
                    <p>
                      {item.des}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTeam;