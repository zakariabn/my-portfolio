import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSpring, animated, config } from "react-spring";
import myImg from "../../../asset/Images/profile-img_500x500.png";
import resume from  "../../../asset/file/Zakaria-Bin-Nizam_web_dev_resume_2022.pdf"
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const props = useSpring({
    to: { transform: "scale(1.4)" },
    from: { transform: "scale(1.3)" },
    loop: { reverse: true },
    config: { duration: 10000 },
  });

  return (
    <div className="bg-dark">
      <div className="max-w-screen-xl mx-auto lg:h-[650px] px-4">
        {/* container */}
        <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-between">
          {/* content */}
          <div className="flex-1 p-4 mt-10">
            {/* this is because equal space */}
            <div className="w-full h-full flex flex-col justify-center items-center md:items-start">
              {/* name container */}
              <div className="relative w-full mb-9">
                <span className="w-[70px] h-[70px] bg-primary_shade rounded-full inline-block"></span>
                <h3 className="absolute top-5 left-10 text-3xl font-bold text-white">
                  I'm Zakaria Bin Nizam
                </h3>
              </div>

              {/* profession */}
              <div className="mb-10 md:mb-0">
                <h3 className="text-5xl md:text-6xl font-bold text-white">
                  Web Developer
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="hero-btn mt-4">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm text-primary mr-5 transition hero-prj-ico-animation"
                    />{" "}
                    <Link to="/project">GO TO PROJECT</Link>
                  </button>

                  <a
                    className="hero-btn d:ml-4 mt-4"
                    href={resume}
                    download>
                    Resume
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-sm text-primary ml-5 hero-res-ico-animation"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="flex-1 mx-auto overflow-hidden border-b-2 lg:border-none border-neutral">
            <animated.img
              src={myImg}
              style={props}
              alt=""
              className="lg:relative lg:top-[115px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
