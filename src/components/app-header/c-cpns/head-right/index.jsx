import React, { memo,useEffect,useState } from 'react'

import { HeadRightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeadRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function handleOutPanelClick(){
      setShowPanel(false)
    }
    window.addEventListener('click',handleOutPanelClick,true)
    return () => {
      window.removeEventListener('click',handleOutPanelClick)
    }
  },[])

  const handleShowPanel = () => {
    console.log('点击')
    setShowPanel(true)
  }
  return (
    <HeadRightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
        
      </div>
      <div className="profile" onClick={handleShowPanel}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item">注册</div>
                <div className="item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">来爱彼迎发布房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </HeadRightWrapper>
  )
})

export default HeadRight