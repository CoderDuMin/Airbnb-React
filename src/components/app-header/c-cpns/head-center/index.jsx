import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { HeadCenterWrapper } from './style'

const HeadCenter = memo(() => {
  return (
    <HeadCenterWrapper>
      <div className='search-bar'>
        <div className='text'>
          搜索房源和体验
        </div>
        <div className='icon'>
          <IconSearchBar/>
        </div>
      </div>
    </HeadCenterWrapper>
  )
})

export default HeadCenter