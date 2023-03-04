import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"
import Indicator from '../indicator'
import { PictureBrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { close,pictureUrls=[] } = props
  useEffect(()=>{
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[])

  const handleClose = () => {
    close()
  }

  const [isNext,setIsNext] = useState(true)
  const [currentIndex,setCurrentIndex] = useState(0)
  const controlClickHandle = (next) => {
    let newIndex = currentIndex
    if(next){
      setIsNext(true)
      if(newIndex >= (pictureUrls.length -1)){
        newIndex = 0
      }else{
        newIndex++
      }
    }else{
      setIsNext(false)

      if(newIndex === 0 ){
        newIndex = pictureUrls.length -1
      }
      else{

        newIndex--
      }
    }
    setCurrentIndex(newIndex)
  }
  const bottomItemClickHandle = (index) => {
    setCurrentIndex(index)
  }
  return (
    <PictureBrowserWrapper isNext={isNext}>
      <div className="top">
        <div className='close-btn' onClick={handleClose}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className='btn left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"/>
          </div>
          <div className='btn right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"/>
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="bottom">
       <div className='list'>
         <Indicator selectIndex={currentIndex}>
           {
             pictureUrls.map((item, index) => {
               return (
                 <div 
                   className={classNames("item", { active: currentIndex === index })}
                   key={item}
                   onClick={e => bottomItemClickHandle(index)}
                 >
                   <img src={item} alt="" />
                 </div>
               )
             })
           }
         </Indicator>
       </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls:PropTypes.array
}

export default PictureBrowser