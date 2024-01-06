const Rings = ({ style, ovalStyle }) => {
  return (
    <div className="rings" style={{ ...style }}>
      <div className="oval" style={{ ...ovalStyle }}></div>
      <div className="oval oval-1" style={{ ...ovalStyle }}></div>
      <div className="oval oval-1" style={{ ...ovalStyle }}></div>
      <div className="oval oval-1" style={{ ...ovalStyle }}></div>
      <div className="oval oval-1" style={{ ...ovalStyle }}></div>
    </div>
  );
};

export default Rings;
