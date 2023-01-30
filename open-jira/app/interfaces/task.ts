export interface TaskInterface {
    id: string
    title: string
    taskGrup: string
    encargado: string
    status: Status
}

export interface InitTaskSlice {
    isDrag: boolean
    tasks: TaskInterface[]
}

export type Status = 'pending' | 'process' | 'finish'