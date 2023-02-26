import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { HeadLeftWrapper } from './style'
import LogoTextPng from '@/assets/img/airbnbText.jpg'
const HeadLeft = memo(() => {
  return (
    <HeadLeftWrapper>
      <IconLogo />
      <img src={LogoTextPng} alt="" />
    </HeadLeftWrapper>
  )
})

export default HeadLeft