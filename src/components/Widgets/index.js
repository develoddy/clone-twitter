import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { Widget,Header, DivIcon, DivContent } from "./styles";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"

export const Widgets = () => {
  return (
    <Widget>
      <Header>
        <DivIcon>
          <SearchIcon className="searchIcon"></SearchIcon>
          <input placeholder='Buscar' />
        </DivIcon>
      </Header>

      <DivContent>
        <h2>Wat's happening</h2>

        <TwitterTweetEmbed
          tweetId={'1606218876689080320'}
        />

        <TwitterTweetEmbed
          tweetId={'1620714462717120514'}
        />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="lujandev"
          options={{height: 400}}
        />

        <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />

      </DivContent>
    </Widget>
  )
}
