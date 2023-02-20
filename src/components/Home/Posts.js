import React from 'react'
import { Post, Avatar, PostBody, PostDescription, Images, PostFooter } from "./styles"
import  VerifiedUser from "@material-ui/icons/VerifiedUser";
import  ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import  Repeat from "@material-ui/icons/Repeat";
import  FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import  Publish from "@material-ui/icons/Publish";


export const Posts = () => {
  return (
    <Post>
        <div className='post_avatar'>
            <Avatar src="https://randomuser.me/api/portraits/women/72.jpg"></Avatar>
        </div>

        <PostBody>
            <div>
                <div>
                    <h3>Json dev <span>
                        <VerifiedUser className="post_icon"></VerifiedUser>
                        @jhoandev1</span>
                    </h3>

                    <PostDescription>
                        <p>Lerem ipsum dolor sit amet consectur adpiscion elit. A nostrum rem vitae asprectur magne repella comodit earum ipsam odit eius!</p>
                    </PostDescription>
                </div>

                <Images src="https://media.giphy.com/media/13V0dy1zzyjbYTQQM/giphy.gif" ></Images>

                <PostFooter>
                    <ChatBubbleOutline fontSize="small" ></ChatBubbleOutline>
                    <Repeat fontSize="small" ></Repeat>
                    <FavoriteBorder fontSize="small" ></FavoriteBorder>
                    <Publish fontSize="small" ></Publish>
                </PostFooter>
            </div>
        </PostBody>
    </Post>
  )
}
