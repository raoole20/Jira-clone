import { createSlice } from "@reduxjs/toolkit";
import { InitTaskSlice } from "app/interfaces";

const initialState: InitTaskSlice = {
  tasks: [
    {
      id: "1",
      title: "task-01",
      taskGrup: "grup-01",
      encargado: "raul",
      status: "pending",
    },
    {
      id: "2",
      title: "task-02",
      taskGrup: "grup-02",
      encargado: "raul",
      status: "finish",
    },
    {
      id: "3",
      title: "task-03",
      taskGrup: "grup-03",
      encargado: "raul",
      status: "process",
    },
    {
      id: "4",
      title: "task-04",
      taskGrup: "grup-04",
      encargado: "raul",
      status: "process",
    },
    {
      id: "5",
      title: "task-05",
      taskGrup: "grup-05",
      encargado: "raul",
      status: "pending",
    },
  ],
  isDrag: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    taskUpdate(state, actions) {
      const { id, status } = actions.payload;

      state.tasks = state.tasks.map((task) => {
        if (task.id === id) return {...task, status}
        return task;
      });
    },
    isDragStart(state) {
      state.isDrag = true
    },
    isDragEnd(state) {
      state.isDrag = false
    },
  },
});

export const taskActions = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
