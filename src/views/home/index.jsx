import dmRequest from '@/service'
import { changeRoomsAction } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import './style.less'

const Home = memo(() => {

  const {highScoreRoom} = useSelector((state) => {
    return {
      highScoreRoom:state.home.highScoreRoom
    }
  },shallowEqual)
  const dispatch = useDispatch()

  useEffect(()=>{
    dmRequest.get({
      url: "/home/highscore"
    }).then(res => {
      console.log('home请求数据:',res);
      dispatch(changeRoomsAction(res))
    })
  },[dispatch])

  return (
    <div>
      <h2>Home</h2>
      <a href="/detail">好好好</a>
      {
        highScoreRoom?.list?.map(item => {
         return (
          <div className='item' key={item.id}>
            <img src={item.picture_url} alt="" style={{width:'100px',height:'100px'}} />
            <div>{item.name}</div>
          </div>
         )
        })
      }
    </div>
  )
})

export default Home