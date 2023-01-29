export interface TaskInterface {
    id: string
    title: string
    taskGrup: string
    encargado: string
    status: Status
}

export type Status = 'pending' | 'process' | 'finish'