import { useEffect, useState } from "react";
import { getAllTodos } from "../../services/to-do-services.ts";
import TodoCard from "../../components/TodoCard/TodoCard";
import { ToDoResponse } from "../../services/api-responses.interface.ts";

const AllTodos = () => {
  const [fetchStatus, setFetchStatus] = useState("");
  const [todos, setTodos] = useState<ToDoResponse[]>([]);
  const [error, setError] = useState<null | { message: string }>(null);

  useEffect(() => {
    setFetchStatus("loading");
    getAllTodos()
      .then((data: any) => {
        setTodos(data);
        setFetchStatus("success");
      })
      .catch((error: any) => {
        setError(error);
        setFetchStatus("failure");
      });
  }, []);

  return (
    <>
      {fetchStatus === "loading" && <p>Loading</p>}
      {fetchStatus === "success" &&
        todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      {fetchStatus === "failure" && <p>{error?.message}</p>}
    </>
  );
};

export default AllTodos;
