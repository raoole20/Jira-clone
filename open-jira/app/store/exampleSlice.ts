import { createSlice} from '@reduxjs/toolkit'

const initialState = {
   
}

const exampleSlice = createSlice({
   name: 'example',
   initialState,
   reducers: {
    firstReducer (state) {
       
    }
   }
 })

export const exampleActions = exampleSlice.actions
export const exampleReducer = exampleSlice.reducer