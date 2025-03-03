import User from "@/models/User";
import http from "./Engine";

type GetUserProps = {
  id: number,
  setUser: React.Dispatch<React.SetStateAction<User>>
}
export default async function getUserById({ id, setUser }: GetUserProps) {
  console.log(id)
  try {
    const response = await http.get(`/server/user/${id}`);
    if (response.status == 200){
      setUser(response.data);
    }
  } catch (error){
    console.log(error)
    throw new Error(`Impossible d'obtenir l'user à l'index ${id}`);
  }
}