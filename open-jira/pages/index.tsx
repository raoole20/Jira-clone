import { Button, Typography } from '@mui/material'
import { MainLayout } from 'app/components/layout'

export default function Home ({ onChangeMode }: any): JSX.Element {

  return (
    <MainLayout onChangeMode={onChangeMode}>
      <Button onClick={onChangeMode} variant="contained" color="success">Toggle Mode</Button>
    </MainLayout>
  )
}

