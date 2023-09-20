
import React from 'react'
import styled from 'styled-components'


const SideBarOptions = ({Icon,title}) => {
  return (
    <SideBarOptionsContainer>
      {Icon && <Icon fontSize="small" styled={{padding:10}} />}
      {
        Icon ? (
          <p>{title}</p>
        ):(
          <SideBarOptionChannels>
            <span>#</span>
            <p>{title}</p>

          </SideBarOptionChannels>
        )
      }
    </SideBarOptionsContainer>
  )
}

export default SideBarOptions

const SideBarOptionsContainer = styled.div`
  color:white;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  padding: 5px 0;
  border-radius: 5px;
  opacity: 0.7;
  &:hover {
    opacity: 0.9;
    background-color: #602f64;
  }
`
const SideBarOptionChannels = styled.div``