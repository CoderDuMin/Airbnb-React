import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo,useState } from 'react'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  /** redux获取数据 */
  const { detailInfo } = props
  const [showPic,setShowPic] = useState(false)
  const [showIndex,setShowIndex] = useState(0)
  const picClick = (index) => {
    setShowIndex(index)
    setShowPic(true)
  }
  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item' onClick={e=>picClick(0)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map((item,index) => {
              return (
                <div className='item' key={item} onClick={e=>picClick(index+1)}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
        <div className='show-btn' onClick={() => picClick(0)} >显示照片</div>
      </div>
      { showPic && <PictureBrowser close={() => setShowPic(false)} showIndex={showIndex} pictureUrls={detailInfo.picture_urls} />}
    </PicturesWrapper>
  )
})

export default DetailPictures