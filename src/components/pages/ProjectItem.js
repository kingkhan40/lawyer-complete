import React from "react";

const ProjectItem = ({ category, imageSrc, title, subtitle, description, about }) => {
  return (
    <div className={`project-item filterable-item ${category}`}>
      <figure className="featured-image" itemscope="" itemtype="https://schema.org/ImageObject">
        <img itemprop="image" src={imageSrc} alt={title} />
        <figcaption>
          <h2 className="project-title">
            <a href="#">{title}</a>
          </h2>
          <p className="project-subtitle">{subtitle}</p>
          <p>{description}</p>
        </figcaption>
      </figure>
      <meta itemprop="about" content={about} />
    </div>
  );
};

export default ProjectItem;
