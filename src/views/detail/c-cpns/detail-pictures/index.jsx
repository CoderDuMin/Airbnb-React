import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo,useState } from 'react'
import { useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {
  /** redux获取数据 */
  const { detailInfo } = props
  const [showPic,setShowPic] = useState(false)
  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
        <div className='show-btn' onClick={() => setShowPic(true)} >显示照片</div>
      </div>
      { showPic && <PictureBrowser close={() => setShowPic(false)} pictureUrls={detailInfo.picture_urls} />}
    </PicturesWrapper>
  )
})

export default DetailPictures