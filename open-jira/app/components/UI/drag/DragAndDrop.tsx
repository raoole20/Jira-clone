import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Column } from './Column'

interface Task {
    task: any
    columns: any
    columnOrder: any
}

const DUMMY_DATA: Task = {
    task: {
        'task-1': {
            id: 'task-1',
            content: 'take out the garbage'
        },
        'task-2': {
            id: 'task-2',
            content: 'take out the garbage'
        },
        'task-3': {
            id: 'task-3',
            content: 'take out the garbage'
        },
        'task-4': {
            id: 'task-4',
            content: 'take out the garbage'
        },
    },
    columns: {
        'columns-1': {
            id: 'columns-1',
            title: 'TODO',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['columns-1']
}

export const DragAndDrop = () => {
    const [state, setState] = useState(DUMMY_DATA)

    const onDragEnd = (result: any) => {

    }
    return (
        <DragDropContext
             onDragEnd={onDragEnd}
            >
            {
                state.columnOrder.map((columnId: string) => {
                    const column = state.columns[columnId]
                    const tasks = column.taskIds.map((taskId: string) => state.task[taskId])

                    return <Column key={column.id} column={column} task={tasks} />
            })}
        </DragDropContext>
    )
}
