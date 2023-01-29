import { Avatar, AvatarGroup, Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { MainLayout } from "app/components/layout";
import { DragContainer, Searchbar } from "app/components/UI";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Home({ onChangeMode }: any): JSX.Element {
  return (
    <MainLayout onChangeMode={onChangeMode}>
      <Typography variant="body1">Proyecto 01 / this is a proyect</Typography>
      <Typography variant="h4">Tablero Sprint 2</Typography>

      <Stack direction={'row'} mt='20px' spacing={2}>
        <Searchbar />
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Stack>


      <DragContainer />
    </MainLayout>
  );
}
