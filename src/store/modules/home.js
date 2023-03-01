import { getDiscountInfo, getGoodPriceInfo, getHighScoreInfo, getRecommendInfo } from '@/service/modules/home'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomePriceInfoAction = createAsyncThunk('fetch/homeprice',async (payload,{dispatch}) => {
  getGoodPriceInfo().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHighScoreInfo().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getDiscountInfo().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  getRecommendInfo().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
})

const homeReducer = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{},
    recommendInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,action){
      state.goodPriceInfo = action.payload
    },
    changeHighScoreInfoAction(state,action){
      state.highScoreInfo = action.payload
    },
    changeDiscountInfoAction(state,action){
      state.discountInfo = action.payload
    },
    changeRecommendInfoAction(state,action){
      state.recommendInfo = action.payload
    }
  }
})
export const { changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction,changeRecommendInfoAction } = homeReducer.actions
export default homeReducer.reducer