import { Box, Button, Divider, Stack, styled, TextField, Typography } from "@mui/material"
import { FormEvent } from "react"
import { ModalCustom } from "../common/ModalCustom"
import ChipsArray from "./ChipArray"

export const TaskModal = () => {
  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <ModalCustom>
      <Typography variant='h4' fontWeight={'800'}>Create a new Task</Typography>

      <Divider />

      <form onSubmit={handleSumbit}>
        <Container mt="15px">
          <Stack>
            <Typography variant='subtitle1'>Task title</Typography>
            <TextField required size="small" fullWidth />
          </Stack>
        </Container>

        <Container mt="15px">
          <Stack>
            <Typography variant='subtitle1'>Task description</Typography>
            <TextField required size="small" fullWidth multiline />
          </Stack>
        </Container>


        <Container mt="15px">
          <Stack>
            <Typography>Tags: </Typography>
            <TextField placeholder="find one tag" size="small" sx={{ mb: 1 }} />
            <ChipsArray />
          </Stack>
        </Container>

        <Stack>
          <Button variant="contained" type='submit' color='secondary' sx={{ mt: 1 }}>create</Button>
        </Stack>
      </form>

    </ModalCustom>
  )
}

const Container = styled(Box)(({ theme }) => ({

}))