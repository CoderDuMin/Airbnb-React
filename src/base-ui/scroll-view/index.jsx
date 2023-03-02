import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
  const contentRef = useRef()
  const [posIndex,setPosIndex ] = useState(0)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const totalDistance = useRef(0)

  useEffect(() => {
    let scrollWidth = contentRef.current.scrollWidth
    let clientWidth = contentRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    console.log('scrollWidth',scrollWidth)
    console.log('clientWidth',clientWidth)
    console.log('totalDistance',totalDistance.current)
    if(totalDistance.current > 0){
      setShowRight(true)
    }
  },[setShowRight])

  const handleControlClick = (isRight=true) => {
    const newIndex = posIndex + (isRight ? 1 : -1)
    let nowEl = contentRef.current.children[newIndex]
    let offsetLeft = nowEl.offsetLeft
    console.log('offsetLeft',offsetLeft,nowEl)
    contentRef.current.style.transform = `translateX(-${offsetLeft}px)`
    setPosIndex(newIndex)
    setShowLeft(offsetLeft > 0)
    setShowRight(totalDistance.current > offsetLeft)
  }

  return (
    <ScrollViewWrapper>
      {
        showLeft && 
        <div className="control left"  onClick={() => handleControlClick(false)}>
          <IconArrowLeft />
        </div>
      }
      { showRight &&
        <div className="control right" onClick={() => handleControlClick(true)}>
          <IconArrowRight />
        </div>
      }
      <div className="scroll">
        <div className="scroll-content" ref={contentRef}>
          {
            props.children
          }
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView