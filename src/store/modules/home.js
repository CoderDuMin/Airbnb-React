import { createSlice } from '@reduxjs/toolkit'

const homeReducer = createSlice({
  name:'home',
  initialState:{
    highScroeRoom:{}
  },
  reducers:{
    changeRoomsAction(state,action){
      state.highScroeRoom = action.payload
    }
  }
})
export const { changeRoomsAction } = homeReducer.actions
export default homeReducer.reducer