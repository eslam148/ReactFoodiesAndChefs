import "./styles.css";

function CallToAction({ title, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}

export default CallToAction;
