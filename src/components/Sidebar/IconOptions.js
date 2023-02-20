import React from 'react'
import { SidebarIcon } from "./styles";

export const IconOptions = ( { text, Icon, active } ) => {
  return (
    <SidebarIcon active={active}>
        <Icon></Icon>
        <h2> { text } </h2>
    </SidebarIcon>
  )
}
