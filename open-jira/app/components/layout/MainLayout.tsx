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
  children: JSX.Element
  onChangeMode():void
}

const PageContainer = styled(Box)(({theme}) => ({
  height: '100vh',
  width: '100%',
  display: 'flex'
}))

const BoxContainer = styled(Box)(({theme}) => ({
  height: '100hv',
  paddingTop: '100px',
  width: '100%'
}))