import { faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSpring, animated, config } from "react-spring";
import myImg from "../../../asset/Images/profile-img_500x500.png";
import './Hero.css'

const Hero = () => {
  const props = useSpring({
    to: { transform: "scale(1.4)" },
    from: { transform: "scale(1.3)" },
    loop: { reverse: true },
    config: { duration: 10000 },
  });

  return (
    <div className="bg-dark">
      <div className="max-w-screen-xl mx-auto h-[650px]">
        {/* container */}
        <div className="w-full h-full flex justify-between">
          {/* content */}
          <div className="flex-1">
            {" "}
            {/* this is because equal space */}
            <div className="w-full h-full flex flex-col justify-center">
              {/* name container */}
              <div className="relative w-full mb-9">
                <span className="w-[70px] h-[70px] bg-primary_shade rounded-full inline-block"></span>
                <h3 className="absolute top-5 left-10 text-3xl font-bold text-white">
                  I'm Zakaria Bin Nizam
                </h3>
              </div>

              {/* profession */}
              <div>
                <h3 className="text-6xl font-bold text-white">Web Developer</h3>
                <button className="hero-btn mt-4">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-sm text-primary mr-5 hero-prj-ico-animation"
                  />{" "}
                  GO TO PROJECT
                </button>
                <button className="hero-btn ml-4 mt-4">
                  Resume
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="text-sm text-primary ml-5 hero-res-ico-animation"
                  />{" "}
                </button>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="flex-1 overflow-hidden">
            <animated.img
              src={myImg}
              style={props}
              alt=""
              className="relative top-[115px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
