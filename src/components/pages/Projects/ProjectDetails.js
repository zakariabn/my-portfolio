import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSingleProject from "../../../hooks/useSingleProject";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, projectLoading, projectError] = useSingleProject(id);

  const { _id, logo, name, screen_short, bullet_point, site_url } = project;

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
      {!isEmptyObject(project) ? (
        <div className="max-w-[75vw] mx-auto p-4">
          <div>
            <h3>{name}</h3>
          </div>

          <div className=" grid grid-cols-2 gap-4">
            {/* image display */}
            <div className="border-2 border-gray-700 p-2 shadow-sm">
              {/* image carousel display */}
              <div
                id="carouselDarkVariant"
                className={`carousel slide carousel-fade carousel-dark relative`}
                data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                  <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="1"
                    aria-label="Slide 1"></button>
                  <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="2"
                    aria-label="Slide 1"></button>
                </div>

                <div className="carousel-inner relative w-full overflow-hidden">
                  {screen_short &&
                    screen_short?.map((img, i) => {
                      return (
                        <div
                          className="carousel-item active relative float-left w-full"
                          key={"carouse image" + i}>
                          <div className="max-h-[300px] overflow-hidden">
                            <img
                              src={img}
                              className="block w-full h-full"
                              alt="Web page screen short"
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>

                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide="prev">
                  <span
                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide="next">
                  <span
                    className="carousel-control-next-icon inline-block bg-no-repeat"
                    aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* content */}
            <div>
              <ul>
                {bullet_point &&
                  bullet_point?.map((point, i) => (
                    <li key={"bullet point" + i}>{point}</li>
                  ))}
              </ul>
              <button>
                {" "}
                <a href={site_url} target="_blank" rel="noreferrer">
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <NotFoundPage/>
      )}
    </>
  );
};

export default ProjectDetails;
// in this i will do full page scroll animation
