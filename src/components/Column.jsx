// src/components/Column.jsx
function Column({ title, className }) {
  return (
    <div className={`box ${className}`}>
      <h2>{title}</h2>
    </div>
  );
}

export default Column;