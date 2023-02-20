import React from 'react'
import { SidebarIcon } from "./styles";

export const IconOptions = ( { text, Icon, active, primary } ) => {
  return (
    <SidebarIcon active = { active } primary = { primary }  >
        <Icon></Icon>
        <h2> { text } </h2>
    </SidebarIcon>
  )
}
