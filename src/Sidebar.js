 import React from 'react';
 import "./Sidebar.css";
 import SidebarChat from './SidebarChat';
 import DonutLargeSharpIcon from '@mui/icons-material/DonutLargeSharp';
 import SearchSharpIcon from '@mui/icons-material/SearchSharp';
 import ChatSharpIcon from '@mui/icons-material/ChatSharp';
 import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { Avatar,IconButton } from '@mui/material';
 function Sidebar() {
   return (
     <div className="Sidebar">
        <div className="Sidebar__header">
            <Avatar src="https://satishtirumalapudi.github.io/profile-img.jpeg" />
            <div className="Sidebar__headerRight">
                <IconButton><DonutLargeSharpIcon /></IconButton>
                <IconButton><ChatSharpIcon /></IconButton>
                <IconButton><MoreVertSharpIcon /></IconButton>

            </div>
        </div>
        <div className='sidebar__search'>
           <div className="sidebar__searchContainer">
            <SearchSharpIcon/>
            <input placeholder="Search or start new chat" type="text" />
           </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
     </div>
   )
 }
 
 export default Sidebar