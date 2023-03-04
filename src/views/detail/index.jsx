import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  /** redux获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <DetailWrapper>
      <DetailPictures detailInfo={detailInfo} />
      <DetailInfo detailInfo={detailInfo} />
    </DetailWrapper>
  )
})

export default Detail