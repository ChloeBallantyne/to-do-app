import AllTodos from "../AllTodos/AllTodos";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="head_wrapper">
        <h1>TODO LIST</h1>
      </div>
      <div className="option_wrapper">
        <button className="add_button">Add Task</button>
        <select className="filter_option">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="todo_wrapper">
        <AllTodos />
      </div>
    </>
  );
};

export default MainPage;
