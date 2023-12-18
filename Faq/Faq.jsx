import React,{useState} from "react";

export default function Faq({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const[isOpen,setIsOpen]=useState(false);

  const handleAccordionClick = (index) => {
    setIsOpen(!isOpen);
    setActiveIndex(index);
  };
  return (
    <>
      <section class="faq_sec bg_color1" id="faq_sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="heading" data-aos="zoom-in" data-aos-duration="2000">
                <h2>{data.faqHeader}</h2>
                <p>
                  {data.caption}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div
                class="accordion"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                {data?.faqContent?.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion__item ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <h2
                      className="accordion__title"
                      onClick={() => handleAccordionClick(index)}
                    >
                      {item.ques}
                    </h2>
                    <div
                      className={activeIndex === index && isOpen ? "accordion__body show":"accordion__body"}
                    >
                      {item.ans}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
