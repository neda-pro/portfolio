const Project = ({ project }) => {
  const { image, name, skills = [], projectLink, codeLink } = project;
  return (
    <article className="project-wrapper">
      <div style={{ backgroundImage: `url("${image}")` }}>
        <div className="project-cover">
          <a href={projectLink} target="_blank" className="link-button">
            VIEW PROJECT
          </a>
          <a href={codeLink} target="_blank" className="link-button">
            VIEW CODE
          </a>
        </div>
      </div>
      <h3 className="heading-m">{name}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            <p className="body-l" style={{ fontSize: "1.5rem" }}>
              {skill}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Project;
