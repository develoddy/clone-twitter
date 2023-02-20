import React from 'react'
import {Tweetbox, Form, Div, Avatar, DivBox} from './styles';
//import HomeIcon from '@material-ui/icons/Home';
//import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
//import GifBoxIcon from '@material-ui/icons/GifBox';

import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GifBoxIcon from '@material-ui/icons/Gif';
import {Button} from '@material-ui/core';

export const TweetBox = () => {
  return (
    <Tweetbox>
        <Form>
            <Div>
                <Avatar src="https://randomuser.me/api/portraits/women/59.jpg" alt="" ></Avatar>
                <div className='columns'>
                    <input text="text" placeholder='Dejenos un tweet' ></input>
                    <input text="text" placeholder='Usuario' ></input>
                </div>
            </Div>

            <Div>
                <DivBox>
                    <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
                    <GifBoxIcon></GifBoxIcon>
                </DivBox>

                <input text="text" placeholder='Opcion: url de la img/gif' ></input>

                <Button>Tweet</Button>
            </Div>
        </Form>
    </Tweetbox>
  )
}
