import { Typography, Box, Paper, styled } from "@mui/material";
import { Status, TaskInterface } from "app/interfaces";
import { CardDragable } from "./CardDragable";

const DUMMY_DATA: TaskInterface[] = [
  {
    id: "1",
    title: "task-01",
    taskGrup: "grup-01",
    encargado: "raul",
    status: "pending",
  },
  {
    id: "2",
    title: "task-02",
    taskGrup: "grup-02",
    encargado: "raul",
    status: "finish",
  },
  {
    id: "3",
    title: "task-03",
    taskGrup: "grup-03",
    encargado: "raul",
    status: "process",
  },
  {
    id: "4",
    title: "task-04",
    taskGrup: "grup-04",
    encargado: "raul",
    status: "process",
  },
  {
    id: "5",
    title: "task-05",
    taskGrup: "grup-05",
    encargado: "raul",
    status: "pending",
  },
];

export const ListCard = ({ title, status }: Props) => {
  const dropHandle = () => {
    console.log("drop en la columna ", status);
  };
  return (
    <CustomPaper
      onDrop={dropHandle}
      onDragOver={() => console.log(status)}
      onDropCapture={() => {
        console.log("end");
      }}
    >
      <Typography
        variant="body1"
        color="primary.light"
        fontWeight={"bold"}
        textTransform="uppercase"
      >
        {title}
      </Typography>

      <BoxScroll>
        {DUMMY_DATA.map((task) => {
          if (task.status === status)
            return (
              <CardDragable
                title={task.title}
                task={task.taskGrup}
                integrant={task.encargado}
              />
            );
        })}
      </BoxScroll>
    </CustomPaper>
  );
};

interface Props {
  title: string;
  status: Status;
  tags?: [];
}

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  overflow: "hidden",
  height: "100%",
  maxHeight: "600px",
}));

const BoxScroll = styled(Box)(({ theme }) => ({
  overflowY: "scroll",
  height: "95%",
  marginTop: "5px",
  marginBottom: "5px",
  paddingRight: "7px",
  "::-webkit-scrollbar": {
    width: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "4px",
  },
}));
