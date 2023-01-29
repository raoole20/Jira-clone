import { Box, styled, Typography } from '@mui/material'
import React from 'react'

export const DrawerHead = () => {
  return (
    <BoxStyled>
        <Box display="flex" justifyContent={'center'} flex="0 0 55px">
            <img src='/logo.png'  width={'45px'}/>
        </Box>
        <Box>
            <Typography variant="body1">
                Proyecto 01
            </Typography>    
            <Typography variant="body2">
                this is a proyect
            </Typography>    
        </Box> 
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}))
