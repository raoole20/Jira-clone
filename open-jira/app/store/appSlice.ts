import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark'
}

const aplicationSlice = createSlice({
   name: 'aplication',
   initialState,
   reducers: {
    changeMode (state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    }
   }
 })

export const { changeMode } = aplicationSlice.actions
export const aplicationReducer = aplicationSlice.reducer