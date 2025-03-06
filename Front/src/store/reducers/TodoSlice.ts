import http from "@/hooks/Engine";
import { CreateTodo, Todo } from "@/models/Todo";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// 🔹 Thunk pour récupérer les todos depuis l'API
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await http.get(`/server/todo/user/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Erreur lors du chargement des todos:${error}`);
    }
  }
);

// 🔹 Thunk pour ajouter un todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo: CreateTodo, { rejectWithValue }) => {
    try {
      const response = await http.post(`/server/todo`, todo);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Erreur lors de l'ajout du todo : ${error}`);
    }
  }
);

// 🔹 Thunk pour editer un todo
type editProps = {
  id: number;
  updatedTodo: updateTodo;
};

type updateTodo = {
  title: string;
  description: string;
  status: string;
};
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({ id, updatedTodo }: editProps, { rejectWithValue }) => {
    try {
      const response = await http.put(`/server/todo/${id}`, updatedTodo);
      return response.data;
    } catch (error) {
      return rejectWithValue(`Erreur lors de l'édition du todo: ${error}`);
    }
  }
);
// 🔹 Thunk pour supprimer un todo
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number, { rejectWithValue }) => {
    try {
      await http.delete(`/server/todo/${id}`);
      return id; // Retourne l'ID du todo supprimé
    } catch (error) {
      return rejectWithValue(`Erreur lors de la suppression du todo: ${error}`);
    }
  }
);

type TodoState = {
  items: Todo[];
  status: string;
  error: string | null;
};

const initialState: TodoState = {
  items: [],
  status: "idle",
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(
          (todo: Todo) => todo.id !== action.payload
        );
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index != -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;
