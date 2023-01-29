import { Box } from '@mui/material'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export const Task = ({ task, id }: any) => {
    console.log(task)
    return (
        <Draggable draggableId={task.id} index={task.id}>
            {
                (provided) => (
                    <Box
                        { ...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        border={'1px solid lightgrey'} borderRadius="2px" p={8} >
                        {
                            task.content
                        }
                    </Box>
                )
            }
        </Draggable>

    )
}
