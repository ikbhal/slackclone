import React from 'react'
import styled from "styled-components"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  color: green;
`;
const HeaderLeft= styled.div``
