import Todo from "@/models/Todo";
import { Card, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

type CardTodoProps = {
  selectedCard: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  todo: Todo;
};

export default function CardTodo({
  selectedCard,
  setSelectedCard,
  index,
  todo,
}: CardTodoProps) {
  const dateOfCreation = todo.dateOfCreation
    ? dayjs(todo.dateOfCreation).format("DD MMM YYYY")
    : "Pas de date";

  return (
    <Card key={index}>
      <div
        onClick={() => setSelectedCard(index)}
        data-active={selectedCard === index ? "" : undefined}
        style={{
          height: "100%",
          backgroundColor: "#F0D1A8",
        }}
      >
        <CardContent sx={{ width: "100%", height: "100%", display: "flex" }}>
          <div className="flex flex-col w-[95%]">
            <Typography
              variant="h5"
              component="div"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              {todo.id}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              {todo.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: "1%" }}
            >
              {todo.description}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ marginTop: "7%", fontSize: "var(--text-2xl)" }}
            >
              {dateOfCreation}
            </Typography>
          </div>
          <div className="flex flex-col items-end">
            <IconButton style={{ color: "black" }}>
              <Edit className="h-7 w-7" />
            </IconButton>
            <IconButton style={{ color: "black" }}>
              <Trash2 className="h-7 w-7" />
            </IconButton>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
