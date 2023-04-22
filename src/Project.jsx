import "./Project.css";

function Project({ project_data }) {
  return (
    <article className="project">
      <div className="project__image">
        <img src={project_data.imageUrl} alt="project thumnail" />
      </div>
      <h2 className="project__title">{project_data.title}</h2>
      <p className="project__subtitle">{project_data.subtitle}</p>
      <a href={project_data.link} className="project__link">
        GO
      </a>
      <ul className="project__hashtags">
        {project_data.hashtags.map((hashtag) => (
          <li className="project__hashtag">{hashtag}</li>
        ))}
      </ul>
    </article>
  );
}

export default Project;
