import "./TodoList.css";

function SingleTask({ texto, colorFondo, estaCompletada, onCompletar }) {
  return (
    <div className="single-task">
      <input
        type="checkbox"
        checked={estaCompletada}
        onChange={onCompletar}
        className="task-checkbox"
      />

      <span
        className={`task-text ${estaCompletada ? "completed" : ""}`}
        style={{ backgroundColor: colorFondo }}
      >
        {texto}
      </span>
    </div>
  );
}

export default SingleTask;
