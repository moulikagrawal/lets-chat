import { Avatar, ListItemAvatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
    return (
        <div>
            <div className='sidebarChat'>
                <Avatar />
                <div className='sidebarChat_info'>
                    <h2>Science & Tech</h2>
                    <p>This is the last message</p>
                </div>

            </div>
            <div className='sidebarChat'>
                <Avatar />
                <div className='sidebarChat_info'>
                    <h2>Business</h2>
                    <p>This is the last message</p>
                </div>

            </div>
            <div className='sidebarChat'>
                <Avatar />
                <div className='sidebarChat_info'>
                    <h2>Arts & Literature</h2>
                    <p>This is the last message</p>
                </div>

            </div>
        </div>
    )
}

export default SidebarChat
