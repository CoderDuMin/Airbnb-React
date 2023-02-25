import { createSlice } from '@reduxjs/toolkit'

const homeReducer = createSlice({
  name:'home',
  initialState:{
    highScoreRoom:{}
  },
  reducers:{
    changeRoomsAction(state,action){
      state.highScoreRoom = action.payload
    }
  }
})
export const { changeRoomsAction } = homeReducer.actions
export default homeReducer.reducer