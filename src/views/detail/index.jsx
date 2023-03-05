import React, { memo,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  /** redux获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed:false,topAlpha:false}))
  },[dispatch])
  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo} />
      <DetailInfo detailInfo={detailInfo} />
    </DetailWrapper>
  )
})

export default Detail