"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import portfolio_img_6 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_7.jpg";

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "SEO",
    img: portfolio_img_6,
    title: "Local SEO for Small Businesses",
    des: "Increased local visibility and drove foot traffic through optimized Google Maps listings and keyword targeting.",
  },
  {
    id: 2,
    category: "Website Design",
    img: portfolio_img_7,
    title: "Responsive E-Commerce Website",
    des: "Designed and developed a high-performing e-commerce site optimized for mobile, SEO, and conversions.",
  },
  {
    id: 3,
    category: "Content Marketing",
    img: portfolio_img_8,
    title: "Blog & Content Strategy",
    des: "Created SEO-driven blog content that boosted organic traffic and improved keyword rankings.",
  },
  {
    id: 4,
    category: "Google Ads",
    img: portfolio_img_9,
    title: "PPC Campaign Management",
    des: "Launched and optimized Google Ads campaigns, achieving higher ROI and lead generation.",
  },
  {
    id: 5,
    category: "Social Media",
    img: portfolio_img_10,
    title: "Social Media Growth Campaign",
    des: "Increased engagement and brand awareness through creative campaigns on Facebook and Instagram.",
  },
  {
    id: 6,
    category: "Technical SEO",
    img: portfolio_img_11,
    title: "Website Speed & SEO Audit",
    des: "Improved site performance, fixed crawl issues, and optimized technical SEO for better rankings.",
  },
];

// data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="col-md-4 cs_item cs_ui_design cs_development"
                >
                  <Link
                    href="/portfolio-details"
                    className="cs_portfolio cs_style_1"
                  >
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">{item.title}</h2>
                      <div className="cs_portfolio_subtitle">{item.des}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
