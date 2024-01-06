const Skill = ({ title, items = [] }) => {
  return (
    <div className="skill-wrapper">
      <h2 className="heading-l">{title}</h2>
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item}>
            <p className="body-l">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
