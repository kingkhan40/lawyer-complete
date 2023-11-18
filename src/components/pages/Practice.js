import React, { useState } from "react";
import Blog4 from "../Blogs/Blog4";
import Footer2 from "../Footer/Footer2";
import ProjectItem from "./ProjectItem";
import data from "./Pricticjson";

const Practice = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(9);
  const projectsPerPage = 9;

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setSelectedCategory(category);
    setVisibleProjects(9);
  };

  const handleShowMore = () => {
    setVisibleProjects(
      (prevVisibleProjects) => prevVisibleProjects + projectsPerPage
    );
  };

  const filteredProjects = data.projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  const visibleProjectsData = filteredProjects.slice(0, visibleProjects);

  return (
    <>
      <section className="content-area-2 home-wrapper-2 py-4">
        <Blog4 />
        <hr />

        <main className="main-content">
          <div className="page">
            <div
              className="filter-links filterable-nav"
              data-aos="zoom-in-left"
              data-aos-delay="300"
            >
              <select
                className="mobile-filter"
                onChange={(e) => handleCategoryClick(e.target.value, e)}
                value={selectedCategory}
              >
                <option value="All">Show all</option>
                {data.categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {data.categories.map((category, index) => (
                <a
                  key={category}
                  href=""
                  className={`wow fadeInRight${index === 0 ? " current" : ""}`}
                  data-filter={index === 0 ? "*" : `.${category}`}
                  onClick={(event) => handleCategoryClick(category, event)}
                >
                  {category}
                </a>
              ))}
            </div>

            <div
              className="filterable-items"
              data-aos="fade-down"
              data-aos-delay="500"
              style={{
                position: "relative",
                height: "auto",
                marginLeft: "120px",
              }}
            >
              {visibleProjectsData.map((project, index) => (
                <ProjectItem
                  key={index}
                  category={project.category}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  about={project.about}
                />
              ))}
            </div>
            {visibleProjects < filteredProjects.length && (
              <button
                className="btn btn-outline-success"
                data-aos="fade-down"
                data-aos-delay="300"
                style={{
                  display: "block",
                  margin: "0 auto",
                  borderRadius: "50px",
                  padding: "15px 30px",
                }}
                onClick={handleShowMore}
              >
                Show more
              </button>
            )}
          </div>
        </main>
      </section>
      <Footer2 />
    </>
  );
};

export default Practice;
