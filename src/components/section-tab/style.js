import styled from "styled-components";

export const SectionTabWrapper = styled.div`
  display: flex;
  padding: 10px;
  >.tab{
    color:${props => props.theme.text.primaryColor};
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    margin: 0 10px;
    border-radius: 3px;
    cursor: pointer;
    &.active{
      color:#fff;
      background-color: ${props => props.theme.color.secondaryColor};;
    }
  }
`