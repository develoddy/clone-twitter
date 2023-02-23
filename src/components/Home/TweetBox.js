// import React, {useState} from 'react'
import React from 'react'
import { Tweetbox, Form, Div, Avatar, DivBox, File } from './styles';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GifBoxIcon from '@material-ui/icons/Gif';
import {Button} from '@material-ui/core';
import {db, storage } from '../../firebase';
//import { collection, getDocs } from "firebase/firestore";

export const TweetBox = () => {
    //const [images, setImages] = useState;

    const handleSubir = e => {
        const file = e.target.files[0];
        const storageRef = storage.ref(`/avatar/${file.name}`).put(file);
        storageRef.on(
            "state_changed",
            snapshot => {},
            err => {
                console.log(err)
            }, () => {
                storage
                    .ref("avatar")
                    .child(file.name)
                    .getDowloadURL()
                    .then(url => {
                        //setImages(url)
                        console.log("DEBUG: Respuesta de firebase..")
                        console.log(url);
                    })
            }
        )
    }

  return (
    <Tweetbox>
        <Form>
            <Div>
                <Avatar src="https://randomuser.me/api/portraits/women/59.jpg" alt="" ></Avatar>
                
                <File type="file" onChange={handleSubir} ></File>

                <div className='columns'>
                    <input text="text" placeholder='Dejenos un tweet' ></input>
                    <input text="text" placeholder='Usuario' ></input>
                </div>
            </Div>

            <Div>
                <DivBox>
                    <File type="file" primary ></File>
                    <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
                    <GifBoxIcon></GifBoxIcon>
                </DivBox>
                <File type="file"></File>
                <input text="text" placeholder='Opcion: url de la img/gif' ></input>

                <Button>Tweet</Button>
            </Div>
        </Form>
    </Tweetbox>
  )
}
