import BasicSelect from "@/common/Select";
import Pagination from "@/components/Pagination";
import { IconButton, OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createSvgIcon } from "@mui/material/utils";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import CardCount from "./CardCount";
import CardTodo from "./CardTodo";
import DateRangeCalendarCalendarsProp from "./ContainerCalendar";

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

const cards = [
  { id: 1, title: "Plants", description: "Plants are essential for all life." },
  { id: 2, title: "Animals", description: "Animals are a part of nature." },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 4,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  { id: 5, title: "Plants", description: "Plants are essential for all life." },
  { id: 6, title: "Animals", description: "Animals are a part of nature." },
  {
    id: 7,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 8,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  { id: 9, title: "Plants", description: "Plants are essential for all life." },
  { id: 10, title: "Animals", description: "Animals are a part of nature." },
  {
    id: 11,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 12,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

export default function Body() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const cardPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardPerPage);
  const currentCards = cards.slice(
    (currentPage - 1) * cardPerPage,
    currentPage * cardPerPage
  );

  return (
    <div className="w-[90%] h-full rounded-3xl mx-auto bg-[#FAF7F2] p-4">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="flex flex-row xl:flex-col lg:flex-col w-full xl:w-[25%] mt-8">
          <div className="w-full flex flex-col xs:flex-row xs:gap-8 xs:justify-center">
            <h1
              className="xs:h-full xs:text-center text-dynamic-8xl text-[#F87777]"
              style={{ fontFamily: "Island Moments, cursive" }}
            >
              Sunday
            </h1>
            <h1 className="flex xs:h-full font-abhaya text-dynamic-4xl xl:mb-10 lg:mb-8 md:mb-5 sm:mb-4 xs:mb-3 xs:items-center">
              04, April 2024
            </h1>
          </div>
          <DateRangeCalendarCalendarsProp />
        </div>
        <div className="w-full xl:w-[75%] mt-8 xl:mt-0">
          <div className="flex mb-4">
            <div className="grid grid-cols-[0.5fr_1fr_0.2fr] gap-2 xl:gap-7 lg:gap-6 md:gap-4 sm:gap-3 xs:gap-2 w-full">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                className="ml-3"
                style={{
                  backgroundColor: "#DBE2EF",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Detail"
                variant="outlined"
                style={{
                  backgroundColor: "#DBE2EF",
                }}
              />
              <Button
                variant="contained"
                className="flex justify-center items-center text-center bg-slate-500"
                style={{
                  backgroundColor: "#5C9967",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5%",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
              >
                <IconButton style={{ color: "white" }}>
                  <PlusIcon className="h-5 w-5" />
                </IconButton>
              </Button>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="grid grid-cols-[0.5fr_0.5fr_1fr] gap-2 xl:gap-7 lg:gap-6 md:gap-4 sm:gap-3 xs:gap-2 w-full">
              <BasicSelect
                label="By date"
                options={["Recently", "Past", "Future"]}
              />
              <BasicSelect
                label="By status"
                options={["Done", "Ongoing", "Pending", "Scheduled"]}
              />
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={<SearchIcon />}
                placeholder="Search by name"
                className="justify-self-end"
                style={{ borderColor: "#F0D1A8" }}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 xl:gap-8 lg:gap-7 md:gap-5 sm:gap-4 xs:gap-3">
              {currentCards.map((card, index) => (
                <CardTodo
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  index={index}
                  card={card}
                />
              ))}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col xl:flex-row mt-8 mb-8 gap-6">
        <div className="grid grid-cols-2 xl:grid-cols-2 xl:w-[30%] gap-6">
          <CardCount
            label="COMPLETED TASKS"
            count={4}
            color="F0D1A8"
            typographyClass="text-center"
            boxShadowClass=""
          />
          <CardCount
            label="PENDING TASKS"
            count={4}
            color="C4A49F"
            typographyClass="text-center"
            boxShadowClass=""
          />
        </div>
        <div className="h-full xl:w-[70%]">
          <CardCount
            label="TASKS CREATED"
            count={1000}
            color="FDFDFD"
            typographyClass=""
            boxShadowClass="0px 10px 20px rgba(0, 0, 0, 0.25)"
          />
        </div>
      </div>
    </div>
  );
}
