const Operator = ({ key, type }) => {
  return (
    <button className="btn" id={key}>
      {type}
    </button>
  );
};

export default Operator;
