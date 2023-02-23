import React from 'react';
import './Post.css';


const Post = ({author, content, image, date, statistics}) => {
    return (
        <div className='block'>
            <div className='page_title'>
                <img  src={author.photo} alt="avatar"></img>
                <span>{author.name}</span>
                <span>{author.nickname}</span>
                <span>{date}</span>
            </div>

            <div className='page_text' >
                <span>{content}</span>
                <img src={image} alt='kontent-img'></img>
            </div>

            <div className='page_sub-title'>
                <span>
                    <img className='page_sub-title-img' src={require("./business.gif")} alt="bussines"></img>
                    {statistics.business}
                </span>
                <span>
                    <img className='page_sub-title-img' src={require("./like.png")} alt="bussines"></img>
                    {statistics.like}
                </span>
                <span>
                    <img className='page_sub-title-img' src={require("./desktop.png")} alt="bussines"></img>
                    {statistics.desktop}
                </span>
            </div>
        </div>
    );
};



export default Post;