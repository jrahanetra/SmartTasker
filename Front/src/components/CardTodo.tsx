import { Card, IconButton } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

type CardType = {
  id: number;
  title: string;
  description: string;
}

type CardTodoProps = {
  selectedCard: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  card: CardType;
};

export default function CardTodo({selectedCard, setSelectedCard, index, card}: CardTodoProps) {
  return (
    <Card>
      <CardActionArea
        onClick={() => setSelectedCard(index)}
        data-active={selectedCard === index ? "" : undefined}
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
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
              {card.id}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: "1%" }}
            >
              {card.description}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ marginTop: "7%", fontSize: "var(--text-2xl)" }}
            >
              Start date: 09-09-2025
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
      </CardActionArea>
    </Card>
  );
}
