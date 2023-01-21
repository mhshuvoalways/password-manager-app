import React, { useRef } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[60%] h-[60%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18.5px] leading-[23px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[24px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () => {
  const aboutRef = useRef(null);

  if (window.location.pathname === "/about") {
    setTimeout(() => {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }

  return (
    <section id="about" className={layout.section} ref={aboutRef}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Store and generate your passwords, <br className="sm:block hidden" />{" "}
          we’ll keep them safe.
        </h2>

        <Button styles={`mt-9`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
