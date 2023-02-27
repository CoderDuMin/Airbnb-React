import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import { fetchHomePriceInfoAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import HomeBanner from './c-cpns/home-banner'

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
        {
          goodPriceInfo?.list?.map(item => {
          return (
            <div className='item' key={item.id}>
              {/* <img src={item.picture_url} alt="" style={{width:'100px',height:'100px'}} /> */}
              <div>{item.name}</div>
            </div>
          )
          })
        }
      </div>
    </HomeWrapper>
  )
})

export default Home