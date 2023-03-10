import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index:99;
  background-color: rgba(0,0,0,.85);

  display: flex;
  flex-direction: column;

  .top{
    position: relative;
    height: 86px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .close-btn {
      font-size: 18px;
      cursor: pointer;
      color:#fff;
    }
  }
  .slider{
    flex:1;
    position: relative;
    display: flex;
    justify-content: center;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画的样式 */
      .pic-enter {
        transform: translateX(${props => props.isNext ? "100%": "-100%"});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }

  }
  .bottom{
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    .list {
      max-width: 105vh;
      margin: 0 auto;
      margin-top: 3px;
      overflow: hidden;
      transition: height 300ms ease;
      /* height: ${props => props.showList ? "67px": "0"}; */

      .item {
        margin-right: 15px;
        cursor: pointer;
        user-select: none;

        img {
          height: 67px;
          opacity: 0.5;
        }

        &.active {
          img {
            opacity: 1;
          }
        }
      }
    }
  }
`