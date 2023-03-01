import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomePriceInfoAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { isEmptyO } from '@/utils/util';

const Home = memo(() => {
  const {goodPriceInfo={},highScoreInfo={},discountInfo={},recommendInfo={}} = useSelector((state) => {
    return {
      goodPriceInfo:state.home.goodPriceInfo,
      highScoreInfo:state.home.highScoreInfo,
      discountInfo:state.home.discountInfo,
      recommendInfo:state.home.recommendInfo
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchHomePriceInfoAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 homeInfo={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 homeInfo={recommendInfo} />}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 homeInfo={goodPriceInfo} />}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 homeInfo={highScoreInfo} />}
      </div>
      <Button variant="contained">Hello World</Button>
    </HomeWrapper>
  )
})

export default Home