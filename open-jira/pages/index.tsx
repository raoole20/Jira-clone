import { Button, Typography } from '@mui/material'
import { MainLayout } from 'app/components/layout'

export default function Home ({ onChageMode }: any): JSX.Element {

  return (
    <MainLayout onChageMode={onChageMode}>
      <Button onClick={onChageMode} variant="contained" color="success">Toggle Mode</Button>
    </MainLayout>
  )
}

