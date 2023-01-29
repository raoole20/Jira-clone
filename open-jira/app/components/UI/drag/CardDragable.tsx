import { Bookmark } from '@mui/icons-material'
import { Card, CardContent, Typography, Chip, Box, Avatar } from '@mui/material'
import React from 'react'

export const CardDragable = ({}: Props) => {
    const onDragStart = () => {
        console.log('start')
    }

    const onDragEnd = () => { 
        console.log('end')
    }
    return (
        <Card 
            sx={{ mb: '10px' }}
            draggable
            elevation={5}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            >
            <CardContent>
                <Typography
                    variant='body1'>
                    Registro/login backend
                </Typography>
                <Chip label="LadingPage" color="primary" />
                <Box display={'flex'} alignItems="center" justifyContent={"space-between"}>
                    <Box display="flex" alignItems={"center"} justifyContent="center">
                        <Bookmark /> NFAN-29
                    </Box>
                    <Avatar alt='RE' />
                </Box>
            </CardContent>
        </Card>
    )
}

interface Props {
    title: string
    chip?: string[]
    task: string
    integrant: string
}