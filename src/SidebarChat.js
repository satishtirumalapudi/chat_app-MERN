import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="SidebarChat">
        <Avatar />
        <div className='sidebarChat__info'>
            <h2>Chat name</h2>
            <p>This is the first message</p>
        </div>
    </div>
  )
}

export default SidebarChat