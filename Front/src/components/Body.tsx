import BasicSelect from "@/common/Select";
import Pagination from "@/components/Pagination";
import { Todo } from "@/models/Todo";
import { addTodo, fetchTodos } from "@/store/reducers/TodoSlice";
import { AppDispatch, RootState } from "@/store/store";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCount from "./CardCount";
import CardTodo from "./CardTodo";
import DateRangeCalendarCalendarsProp from "./ContainerCalendar";

interface BodyProps {
  id: number;
}

export default function Body({ id }: BodyProps) {
  const [selectedCard, setSelectedCard] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSearch, setFilterSearch] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const {
    items: todos,
    status,
    error,
  } = useSelector((state: RootState) => state.todos);

  const [cardPerPage, setCardPerPage] = useState<number>(4);

  useEffect(() => {
    const updateCardPerPage = () => {
      setCardPerPage(window.innerWidth < 640 ? 2 : 4);
    };
    updateCardPerPage();
    window.addEventListener("resize", updateCardPerPage);

    return () => window.removeEventListener("resize", updateCardPerPage);
  }, []);

  // 🔹 Charger les todos au montage du composant
  useEffect(() => {
    dispatch(fetchTodos(id));
  }, [dispatch, id]);

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur : {error}</p>;

  const handlePageChange = (page: number) => setCurrentPage(page);

  const totalPages = Math.ceil(todos.length / cardPerPage);
  const currentTodos = [...todos]
    .sort((a: Todo, b: Todo) => {
      if (filterDate === "Recently")
        return (
          new Date(a.dateOfCreation).getTime() -
          new Date(b.dateOfCreation).getTime()
        );
      else if (filterDate === "Oldest")
        return (
          new Date(b.dateOfCreation).getTime() -
          new Date(a.dateOfCreation).getTime()
        );
      return 0;
    })
    .filter((todo: Todo) => {
      return todo.title
        .toLowerCase()
        .trim()
        .includes(filterSearch.toLowerCase().trim());
    })
    .slice((currentPage - 1) * cardPerPage, currentPage * cardPerPage);

  const submitNewTodo = () => {
    const newTodo = {
      title: title,
      description: description,
      status: "Scheduled",
      dateOfCreation: new Date(),
      dateOfEnding: null,
      id_user: id,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setDescription("");
  };

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                variant="outlined"
                className="ml-3"
                style={{
                  backgroundColor: "#DBE2EF",
                }}
              />
              <TextField
                id="outlined-basic"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                onClick={submitNewTodo}
              >
                ajouter
              </Button>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="grid grid-cols-[0.5fr_0.5fr_1fr] gap-2 xl:gap-7 lg:gap-6 md:gap-4 sm:gap-3 xs:gap-2 w-full">
              <BasicSelect
                label="By date"
                options={["None", "Recently", "Oldest"]}
                filter={filterDate}
                setFilter={setFilterDate}
              />
              <BasicSelect
                label="By status"
                options={["None", "Done", "Ongoing", "Pending", "Scheduled"]}
                filter={filterStatus}
                setFilter={setFilterStatus}
              />
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={<SearchIcon />}
                value={filterSearch}
                onChange={e => {setFilterSearch(e.target.value)}}
                placeholder="Search by name"
                className="justify-self-end"
                style={{ borderColor: "#F0D1A8" }}
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 xl:gap-8 lg:gap-7 md:gap-5 sm:gap-4 xs:gap-3 xs:grid-cols-1">
              {currentTodos.map((todo, index) => (
                <CardTodo
                  selectedCard={selectedCard}
                  setSelectedCard={setSelectedCard}
                  index={index}
                  key={index}
                  todo={todo}
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
