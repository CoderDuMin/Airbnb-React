import { getGoodPriceInfo } from '@/service/modules/home'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomePriceInfoAction = createAsyncThunk('fetch/homeprice',async () => {
  let data = await getGoodPriceInfo()
  return data
})

const homeReducer = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{}
  },
  reducers:{
    changeRoomsAction(state,action){
      state.highScoreRoom = action.payload
    }
  },
  extraReducers:{
    [fetchHomePriceInfoAction.fulfilled]:(state,{payload})=>{
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }
})
export const { changeRoomsAction } = homeReducer.actions
export default homeReducer.reducer