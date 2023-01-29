import { Box, Button, Typography } from "@mui/material";
import { MainLayout } from "app/components/layout";
import { DragAndDrop } from "app/components/UI";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Home({ onChangeMode }: any): JSX.Element {
  return (
    <MainLayout onChangeMode={onChangeMode}>
      <Typography variant="body1">Proyecto 01 / this is a proyect</Typography>
      <Typography variant="h4">Tablero Sprint 2</Typography>

      <DragAndDrop />
    </MainLayout>
  );
}
