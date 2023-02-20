import React from 'react'
import { Posts } from './Posts';
import { Container, Header } from "./styles";
import { TweetBox } from './TweetBox';


export const Home = () => {
  return (
    <Container>
      {/* Header */}
      <Header> <h2>Home</h2> </Header>

      {/* TweetBox */}
      <TweetBox></TweetBox>

      {/* Posts */}
      <Posts></Posts>
      <Posts></Posts>
      <Posts></Posts>
      <Posts></Posts>
    </Container>
  )
}
