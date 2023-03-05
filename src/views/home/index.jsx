import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
// import Button from '@mui/material/Button';

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomePriceInfoAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { isEmptyO } from '@/utils/util';
import HomeLongfor from './c-cpns/home-longfor';
import HomeSectionV3 from './c-cpns/home-section-v3';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Home = memo(() => {
  const {goodPriceInfo={},highScoreInfo={},discountInfo={},recommendInfo={},longforInfo={},plusInfo={}} = useSelector((state) => {
    return {
      goodPriceInfo:state.home.goodPriceInfo,
      highScoreInfo:state.home.highScoreInfo,
      discountInfo:state.home.discountInfo,
      recommendInfo:state.home.recommendInfo,
      longforInfo:state.home.longforInfo,
      plusInfo:state.home.plusInfo,
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchHomePriceInfoAction())
  },[dispatch])
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 homeInfo={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 homeInfo={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor longforInfo={longforInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 homeInfo={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 homeInfo={highScoreInfo} />}
        {isEmptyO(plusInfo) && <HomeSectionV3 plusInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home