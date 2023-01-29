import { configureStore } from '@reduxjs/toolkit'
import { aplicationReducer } from './appSlice'

export const store = configureStore({
  reducer: {
    app:  aplicationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch