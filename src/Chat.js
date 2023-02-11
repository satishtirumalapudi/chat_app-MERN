import { Avatar, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React from 'react';
import "./Chat.css";
function Chat() {
  return (
    <div className='Chat'>
        <div className="chat__header">
            <Avatar />
            <div className="chat__headerInfo">
                <h3> Room name</h3>
                <p>Last seen..</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                    <AttachFileOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertOutlinedIcon />
                </IconButton>

            </div>
        </div>
        <div className='chat__body'>
            <p>
                <span className="chat__name">hello</span>

                This is a message
                <span className='chat__timestamp'>{new Date().toUTCString()}</span></p>

        </div>
    </div>
  )
}

export default Chat