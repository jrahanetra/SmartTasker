import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

type CardCountProps = {
  label: string;
  count: number;
  color: string;
  typographyClass: string;
  boxShadowClass: string;
};
export default function CardCount({ label, count, color, typographyClass, boxShadowClass } : CardCountProps) {
  return (
    <Card
      className="transition-all duration-1000 ease-in-out hover:-translate-y-1"
      style={{
        borderRadius: "30px",
        boxShadow: boxShadowClass,
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          "&[data-active]": {
            backgroundColor: "action.selected",
            "&:hover": {
              backgroundColor: "action.selectedHover",
            },
          },
          backgroundColor: `#${color}`,
        }}
      >
        <CardContent
          sx={{ width: "100%", height: "100%", display: "flex" }}
          className="shadow-2xl"
        >
          <div className="flex flex-col w-[95%] duration">
            <Typography
              variant="h5"
              component="div"
              className="flex text-center"
              style={{
                fontSize: "var(--text-xl)",
                fontWeight: "500",
                wordBreak: "break-word", 
              }}
            >
              {label}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              className={typographyClass}
              style={{
                fontSize: "var(--text-5xl)",
                fontWeight: "600",
              }}
            >
              {count}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
