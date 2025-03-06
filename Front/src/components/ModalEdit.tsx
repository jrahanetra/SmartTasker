import { Todo } from "@/models/Todo";
import { editTodo } from "@/store/reducers/TodoSlice";
import { AppDispatch } from "@/store/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface TodoModalProps {
  todo: Todo;
  onClose: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ todo, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleSubmit = () => {
    const updatedTodo = { title, description, status };
    const id : number = todo.id
    dispatch(editTodo({id, updatedTodo}));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full bg-[#DBE2EF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full bg-[#DBE2EF] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="done"
              name="status"
              value="Done"
              checked={status === "Done"}
              onChange={() => setStatus("Done")}
              className="form-radio text-blue-600"
            />
            <label htmlFor="done" className="ml-2 text-sm text-gray-700">
              Done
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="ongoing"
              name="status"
              value="Ongoing"
              checked={status === "Ongoing"}
              onChange={() => setStatus("Ongoing")}
              className="form-radio text-blue-600"
            />
            <label htmlFor="ongoing" className="ml-2 text-sm text-gray-700">
              Ongoing
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="pending"
              name="status"
              value="Pending"
              checked={status === "Pending"}
              onChange={() => setStatus("Pending")}
              className="form-radio text-blue-600"
            />
            <label htmlFor="pending" className="ml-2 text-sm text-gray-700">
              Pending
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="scheduled"
              name="status"
              value="Scheduled"
              checked={status === "Scheduled"}
              onChange={() => setStatus("Scheduled")}
              className="form-radio text-blue-600"
            />
            <label htmlFor="scheduled" className="ml-2 text-sm text-gray-700">
              Scheduled
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md focus:outline-none hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="py-2 px-4 bg-[#5C9967] text-white rounded-md focus:outline-none hover:bg-[#4a7d53]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
