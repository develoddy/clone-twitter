import React from 'react'
import { Container } from "./styles";
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconOptions } from './IconOptions';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";

export const Sidebar = () => {
  return (
    <Container>
        <TwitterIcon className='twitter-logo' ></TwitterIcon>

        {/* Component Icon - Lo pasamos por props */}
        <IconOptions active text="Home" Icon={HomeIcon} ></IconOptions>
        <IconOptions text="Explorar" Icon={SearchIcon} ></IconOptions>
        <IconOptions text="Notificaciones" Icon={NotificationsNoneIcon} ></IconOptions>
        <IconOptions text="Mensaje" Icon={MailOutlineIcon} ></IconOptions>
        <IconOptions text="Marcadores" Icon={BookmarkBorderIcon} ></IconOptions>
        <IconOptions text="Listas" Icon={ListAltIcon} ></IconOptions>
        <IconOptions text="Perfil" Icon={PermIdentityIcon} ></IconOptions>
        <IconOptions text="Más" Icon={MoreHorizIcon} ></IconOptions>

        <Button variant='outlined' fullWidth>Twee</Button>

    </Container>

  )
}
