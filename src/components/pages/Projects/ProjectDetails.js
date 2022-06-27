import { faCode, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSingleProject from "../../../hooks/useSingleProject";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./projectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, projectLoading, projectError] = useSingleProject(id);

  const { _id, name, screen_short, bullet_point, site_url } = project;

  if (projectLoading) {
    return <p>Loading...</p>;
  }

  if (projectError) {
    console.dir(projectError);
  }

  function isEmptyObject(obj) {
    if (Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }

  return (
    <>
      {isEmptyObject(project) ? (
        <NotFoundPage />
      ) : (
        <section className="max-w-screen-xl mx-auto px-4">
          <button onClick={() => window.history.go(-1)} className="hidden md:inline-block button py-1 border-primary_shade border mt-8 hover:text-primary_shade transition duration-300">Go back</button>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 justify-items-center mt-2">
            <div className="bg-slate-50 col-span-2 w-full p-2">
              <h2 className="text-2xl text-black font-bold">{name}</h2>
              <div className="flex flex-col mt-3 relative">
                <img
                  src={screen_short[0]}
                  alt=""
                  className="w-[95%] border border-gray-400 p-1 rounded self-center"
                />
                <span className="inline-flex text-xs lg:text-base flex-wrap gap-3 mt-3 absolute bottom-1.5 left-7">
                  <button className="details-btn">
                    <FontAwesomeIcon
                      icon={faTv}
                      className="custom-drop-shadow"
                    />
                    <span className="ml-3 custom-drop-shadow">
                      Live Preview
                    </span>
                  </button>

                  <button className="details-btn">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="custom-drop-shadow"
                    />
                    <span className=" ml-3 custom-drop-shadow">
                      Source Code
                    </span>
                  </button>
                </span>
              </div>

              <p className="mt-10 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam explicabo saepe reiciendis, officia soluta rerum!
                Consectetur facere odio recusandae, rerum ducimus nesciunt quo,
                veritatis voluptas praesentium doloribus repudiandae, nostrum
                corrupti.
              </p>

              <div className="mt-8">
                <h4 className="text-xl text-slate-800 font-bold">
                  Technology Used
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 mt-2 list-style text-slate-700">
                  <li>ReactJs</li>
                  <li>NodeJs</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 w-full p-2 col-span-3">

              {/* project description */}
              <div className="mb-6 mt-2">
                <h1 className="text-lg text-slate-800 font-bold mb-2">
                  Description
                </h1>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio inventore velit, <span className="highlight-text">vero ducimus</span> modi repudiandae
                  laudantium tempora nemo officiis odio quis eveniet consectetur
                  eligendi animi in placeat quasi incidunt natus?
                </p>
              </div>

              {/* difficulties */}
              <div className="mb-6">
                <h1 className="text-lg text-slate-800 font-bold mb-2">
                  Project Difficulties
                </h1>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio inventore velit, vero ducimus modi repudiandae
                  laudantium <span className="highlight-text"> tempora nemo officiis odio quis eveniet</span> consectetur
                  eligendi animi in placeat quasi incidunt natus?
                </p>
              </div>

              {/* solution */}
              <div className="mb-6">
                <h1 className="text-lg text-slate-800 font-bold mb-2">
                  My Solution
                </h1>
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio inventore velit, <span className="highlight-text"> vero ducimus modi repudiandae
                  laudantium  </span> odio quis eveniet consectetur
                  eligendi animi in placeat quasi incidunt natus?
                </p>
              </div>

              {/* features */}
              <div className="mb-6">
                <h1 className="text-lg text-slate-800 font-bold mb-2">
                  Notable Features
                </h1>
                <ul className="list-style">
                  <li>Feather 1</li>
                  <li>Feather 2</li>
                  <li>Feather 3</li>
                  <li>Feather 4</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProjectDetails;
// in this i will do full page scroll animation
