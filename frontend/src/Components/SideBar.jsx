import React from 'react'
import styled from 'styled-components'
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Link } from 'react-router-dom';
import SideBarOptions from './SideBarOptions';
import CommentIcon from '@mui/icons-material/Comment';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ForumIcon from '@mui/icons-material/Forum';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SendIcon from '@mui/icons-material/Send';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';

const SideBar = () => {
  return (
    <SideBarContainer>
      <SiderBarHeader>
       <Link to="channel"><h2>WevDev Channel</h2></Link> 
        <AddCommentOutlinedIcon />
      </SiderBarHeader>
      <SideBarOptions Icon={CommentIcon} title="Threads" />
      <SideBarOptions Icon={TurnedInNotIcon} title="Later" />
      <SideBarOptions Icon={ForumIcon} title="Direct Messages" />
      <SideBarOptions Icon={AlternateEmailIcon} title="Mentions & Reactions" />
      <SideBarOptions Icon={SendIcon} title="Drafts & sent" />
      <SideBarOptions Icon={PeopleIcon} title="People & user groups" />
      <SideBarOptions Icon={FileCopyIcon} title="Files" />
      <SideBarOptions Icon={AppsIcon} title="Apps" />
      <SideBarOptions Icon={KeyboardArrowUpIcon} title="Show less" />
      <hr />
      <SideBarOptions Icon={KeyboardArrowDownIcon} title="Channels" />
      <hr />
      <SideBarOptions Icon={AddIcon} title="Add Channel" />

    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  >hr{
    border: 1px solid #49274b;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
const SiderBarHeader =styled.div`
  >h2{
    color: white;
  }
  >.MuiSvgIcon-root{
    padding: 4px;
    font-size: 26px;
    border-radius: 100%;  
    background-color: white;
  }

`
