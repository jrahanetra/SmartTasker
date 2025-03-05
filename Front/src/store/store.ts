import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

// 👇 Définir le type AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;