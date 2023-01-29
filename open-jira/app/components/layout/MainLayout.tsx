import { Box, styled, Typography } from "@mui/material"
import { MiniDrawer, Navbar } from "../UI"

export const MainLayout = ({ children, onChangeMode }: Props) => {
  return (
    <PageContainer>
      <Navbar onChangeMode={onChangeMode} />
      <MiniDrawer />

      <BoxContainer>
        { children }
      </BoxContainer>
    </PageContainer>
  )
}

interface Props {
  children: JSX.Element | JSX.Element[]
  onChangeMode():void
}

const PageContainer = styled(Box)(({theme}) => ({
  height: '100vh',
  width: '100%',
  display: 'flex',
  overflow: 'hidden'
}))

const BoxContainer = styled(Box)(({theme}) => ({
  height: '100vh',
  padding: '100px 40px 40px',
  width: '100%'
}))