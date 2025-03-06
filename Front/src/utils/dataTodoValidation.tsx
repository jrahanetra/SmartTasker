interface Todo {
  title: string;
  description: string;
  status: string;
  dateOfCreation: Date;
  dateOfEnding: Date | null;
  id_user: number;
}

export default function isValidTodo (todo: Todo): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (
    !todo.title ||
    typeof todo.title !== "string" ||
    todo.title.trim() === ""
  ) {
    errors.push("Title");
  }

  if (
    !todo.description ||
    typeof todo.description !== "string" ||
    todo.description.trim() === ""
  ) {
    errors.push("Description");
  }

  const validStatuses: string[] = [
    "Scheduled",
    "Done",
    "Ongoing",
    "Pending",
  ];
  if (!validStatuses.includes(todo.status)) {
    errors.push("Status");
  }

  if (
    !(todo.dateOfCreation instanceof Date) ||
    isNaN(todo.dateOfCreation.getTime())
  ) {
    errors.push("DateOfcreation");
  }

  if (!Number.isInteger(todo.id_user) || todo.id_user < 0) {
    errors.push("id_user");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};
