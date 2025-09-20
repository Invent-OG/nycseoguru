
'use client'
import React, { useState } from 'react';


interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: `What makes your branding process unique?`,
    ans: `Our branding process is not just about creating a logo or choosing colors—it’s about building a story and identity that truly connects with your target audience. We begin with an in-depth research phase, analyzing your industry trends, competitors, and customer expectations. From there, we craft a brand strategy that outlines your positioning, voice, and values. Once the foundation is clear, we design a visual identity system, messaging framework, and brand guidelines that ensure consistency across print, digital, and social platforms. This structured yet flexible approach helps your brand stand out while staying adaptable as your business grows.`,
  },
  {
    id: "Two",
    question: `What services does your creative agency provide?`,
    ans: `We provide end-to-end creative solutions designed to support businesses of all sizes. Our services include brand strategy and identity design, website design and development, user experience (UX/UI) design, social media content creation, and digital marketing campaigns. Beyond design, we also offer video production, photography, copywriting, and content marketing services to help your brand communicate effectively. By combining strategy, design, and technology, we ensure that every project we deliver is not only visually appealing but also results-driven and tailored to achieve measurable outcomes.`,
  },
  {
    id: "Three",
    question: `How do you kick off a new project with a client?`,
    ans: `We believe that the success of any project lies in a strong foundation of understanding. When starting a new project, we begin with a discovery phase where we learn about your goals, challenges, and expectations. This includes stakeholder interviews, market research, and a thorough review of your existing materials. Once we’ve gathered insights, we create a project roadmap that outlines deliverables, milestones, and timelines. This roadmap becomes our guiding document, ensuring transparency and alignment from day one. Throughout the process, we maintain open communication, encouraging collaboration and feedback at every stage.`,
  },
  {
    id: "Four",
    question: `What is your process for handling client revisions?`,
    ans: `We see revisions as an important part of the creative journey. Our process allows for multiple structured feedback rounds, ensuring that your voice is heard while we maintain the integrity of the design. In each round, we review your feedback carefully, suggest professional alternatives if needed, and apply updates in a way that balances creativity with functionality. We use collaborative tools to track changes, maintain version history, and keep communication transparent. This structured yet flexible process ensures that revisions are smooth, efficient, and ultimately lead to a result you are 100% satisfied with.`,
  },
  {
    id: "Five",
    question: `How do you decide the pricing for each project?`,
    ans: `Our pricing is determined based on the unique requirements of each project. Factors such as scope of work, complexity, design style, content needs, and timelines all influence the final cost. We don’t believe in one-size-fits-all pricing, so we prepare customized quotes after discussing your objectives in detail. We also provide clear breakdowns so you know exactly what you’re paying for—whether it’s strategy, design, development, or post-launch support. Our goal is to deliver maximum value within your budget, ensuring that you get a strong return on investment and long-term benefits from our work.`,
  },
  {
    id: "Six",
    question: `Do you provide ongoing support after project delivery?`,
    ans: `Yes, we provide comprehensive post-launch support to ensure your project continues to perform effectively. For branding, this includes updating guidelines, refreshing creative materials, and consulting on new campaigns. For websites and digital platforms, we offer maintenance packages that cover security updates, performance optimization, bug fixes, and content updates. We also provide analytics reporting to help you measure success and adapt strategies as needed. Whether you need short-term assistance or a long-term partnership, we remain a trusted extension of your team, helping your brand stay relevant and impactful.`,
  },
];


const FaqArea = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) =>
            <div key={i} 
            onClick={() => toggleAccordion(i)}
            className={`cs_accordion_item cs_color_1 ${i === activeIndex ? 'active cs_icon' : ''}`}>
              <div className="cs_accordion_header">
                <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                  {item.question}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                  <path style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right" />
                </svg>
              </div>

              <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>
                {item.ans}
              </div>
            </div>
          )} 

        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;