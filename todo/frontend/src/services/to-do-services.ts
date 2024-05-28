const baseUrl = "http://localhost:8080";

export const getAllTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
};

export const toggleCompleted = async (id: number) => {
  const response = await fetch(`${baseUrl}/todos/${id}`, {
    method: "PATCH",
  });
  if (!response.ok) {
    throw new Error("Failed to toggle todo");
  }
};
