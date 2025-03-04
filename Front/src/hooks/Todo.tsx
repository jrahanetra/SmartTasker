import { CreateTodo, Todo } from "@/models/Todo";
import http from "./Engine";

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
    throw new Error(
      `Impossible d'obtenir les todos pour l'user à l'index ${id}`
    );
  }
}

export async function postTodo(data : CreateTodo) {
  try {
    const response = await http.post(`/server/todo`, data);
  } catch (error) {
    throw new Error(`Erreur lors de l'ajout du nouveau tâche`);
  }
}
