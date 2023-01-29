import { Box, Typography } from "@mui/material"
import { Droppable } from "react-beautiful-dnd"
import { Task } from "./Task"


export const Column = ({ column, task = []}: any) => {
    return (
        <Box m={8} border={"1px solid lightgrey"} borderRadius={'2px'}>
            <Typography variant="h3" p={8}>{column.title}</Typography>
            <Droppable droppableId={column.id}>
                {
                    (provided) => (
                        <div style={{ padding: '8px' }} {...provided.droppableProps} ref={provided.innerRef}>
                            {task.map((task: any, index: number) => <Task key={task.id} task={task} id={index}/>)}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </Box>
    )
}
