import { configureStore } from '@reduxjs/toolkit'
import { exampleReducer } from './exampleSlice'

const store = configureStore({
   reducer: {
     exampleReducer: exampleReducer
   }
})

export default store