import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderCenter>
        <SearchIcon />
        <input type="text" placeholder="Search in Channel" />
        <TuneIcon />
      </HeaderCenter>
      <HeaderRight>
        <HelpOutlineIcon />
        <AccountCircleIcon className="AccountCircleIcon" />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--slack-color);
  color: white;
  height: 45px;
  width: 100%;
  position: sticky;
  top: 0;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.25;
  padding-right: 20px;
   >.MuiSvgIcon-root {
    margin-left: auto;
  }
`;
const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0.5;
  background-color: #6a3c6c;
  color: white;
  border-radius: 5px;
  padding: 1px 4px;
  >input[type="text"]{
      outline: 0;
      min-width: 30vw;
      border: none;
      background-color: transparent;
      color: white;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 0.25;

  >.MuiSvgIcon-root.AccountCircleIcon{
    cursor: pointer;
    font-size: 30px;
    :hover{
      opacity: 0.8;
    }
  }
`;
