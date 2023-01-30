import { configureStore } from '@reduxjs/toolkit'
import { aplicationReducer } from './appSlice'
import { taskReducer } from './taskSlice'

export const store = configureStore({
  reducer: {
    app:  aplicationReducer,
    task: taskReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch