
const Button = ({ text, icon: Icon, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {Icon && <Icon />} {text}
    </button>
  );
};

export { Button };

