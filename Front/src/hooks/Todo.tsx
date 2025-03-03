import http from "./Engine";
import Todo from "@/models/Todo";

type GetTodosProps = {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export default async function getTodos({ id, setTodos }: GetTodosProps) {
  try {
    const response = await http.get(`/server/todo/user/${id}`);
    if (response.status == 200) {
      setTodos(response.data);
    }
  } catch (error) {
    console.log(error);
    throw new Error(`Impossible d'obtenir les todos pour l'user à l'index ${id}`);
  }
}
