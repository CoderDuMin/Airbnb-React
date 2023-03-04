import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { HeadLeftWrapper } from './style'
import LogoTextPng from '@/assets/img/airbnbText.jpg'
import { useNavigate } from 'react-router-dom'
const HeadLeft = memo(() => {
  const navgator = useNavigate()
  const navToHome = () => {
    navgator('/home')
  }
  return (
    <HeadLeftWrapper onClick={navToHome}>
      <IconLogo  />
      <img src={LogoTextPng} alt="" />
    </HeadLeftWrapper>
  )
})

export default HeadLeft