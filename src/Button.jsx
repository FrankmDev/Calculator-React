const Button = ({ key, value }) => {
  return (
    <button className="btn" id={key}>
      {value}
    </button>
  );
};

export default Button;
