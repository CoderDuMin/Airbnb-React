import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';

import { HomeWrapper } from './style'
import SectionHeader from '@/components/section-header'
import HomeBanner from './c-cpns/home-banner'
import SectionRooms from '@/components/section-rooms';
import { fetchHomePriceInfoAction } from '@/store/modules/home'

const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state) => {
    return {
      goodPriceInfo:state.home.goodPriceInfo
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchHomePriceInfoAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="goodprice">
        <SectionHeader title={goodPriceInfo?.title} subTitle={goodPriceInfo?.subtitle} />
        <SectionRooms roomList={goodPriceInfo?.list}/>
      </div>
      <Button variant="contained">Hello World</Button>
    </HomeWrapper>
  )
})

export default Home