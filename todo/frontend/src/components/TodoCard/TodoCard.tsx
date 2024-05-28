import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);
import { ToDoResponse } from "../../services/api-responses.interface";
import "./TodoCard.scss";
import binIcon from "../../assets/bin.png";
import pencilIcon from "../../assets/pencil.png";
import { ChangeEvent, useState } from "react";
import { toggleCompleted } from "../../services/to-do-services";

interface TodoCardProps {
  todo: ToDoResponse;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const [completed, setCompleted] = useState(todo.completed);
  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    toggleCompleted(todo.id)
      .then(() => setCompleted(!completed))
      .catch((error) => console.error("Failed to update todo:", error));
  }

  return (
    <div className="todo_card">
      <div className="checkbox">
        <input
          className="checkbox_input"
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="item_wrapper">
        <h3>{todo.item}</h3>
        <h5>posted {dayjs(todo.createdAt).fromNow()}</h5>
      </div>
      <div className="buttons">
        <button className="delete_button">
          <img className="icon" alt="bin icon" src={binIcon}></img>
        </button>
        <button className="edit_button">
          <img className="icon" alt="pencil icon" src={pencilIcon}></img>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
