import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  height: 80px;
  padding: 0 12px 0 24px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  &.fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0%;
  }
`