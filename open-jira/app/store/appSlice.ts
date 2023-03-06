import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  mode: 'dark',
  openModal: false
}

const aplicationSlice = createSlice({
   name: 'aplication',
   initialState,
   reducers: {
    changeMode (state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
    openModal (state) {
      state.openModal = true
    }, 
    closeModal (state) { 
      state.openModal = false
    }
   }
 })

export const { changeMode, openModal, closeModal } = aplicationSlice.actions
export const aplicationReducer = aplicationSlice.reducer