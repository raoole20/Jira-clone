import { Avatar, AvatarGroup, Box, Button, Stack, Typography } from "@mui/material";
import { MainLayout } from "app/components/layout";
import { DragContainer, Searchbar, TaskModal } from "app/components/UI";
import { openModal } from "app/store";
import { useDispatch } from "react-redux";

export default function Home({ onChangeMode }: any): JSX.Element {
  const dispatch = useDispatch()

  return (
    <MainLayout onChangeMode={onChangeMode}>
      <Stack direction='row' justifyContent={'space-between'} alignItems="center">
        <Box>
          <Typography variant="body1">Proyecto 01 / this is a proyect</Typography>
          <Typography variant="h4">Tablero Sprint 2</Typography>
        </Box>

        <Box>
          <Button 
            onClick={()=> dispatch(openModal())}
            variant="contained" 
            color='secondary'>
              Create new Task
          </Button>
        </Box>
      </Stack>

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
      <TaskModal />
    </MainLayout>
  );
}
