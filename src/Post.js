import { Avatar } from '@material-ui/core';
import React from 'react'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOptions from './InputOptions';
import './Post.css';

function Post({name,description,message,photoUrl}) {
    return (
        <div className='post'>
            <div className='post_headers'>
            <Avatar />
                <div className='post_info'>
                    <h2>Raj</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className='post_body'>
                <p>Message</p>
            </div>
            <div className='post_buttons'>
                <InputOptions Icon={ ThumbUpOutlinedIcon} title='Like' color='gray'/>
                <InputOptions Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOptions Icon={ SendOutlinedIcon} title='Send' color='gray'/>
            </div>
        </div>
    )
}

export default Post
