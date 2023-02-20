import styled from "styled-components";

export const Container = styled.div`
    flex: 0.5;
    border-right: 1px solid #ddd;
    overflow-y: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display:none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`

export const Header = styled.header`

`

/* TWEETBOX */
export const Tweetbox = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 5px 15px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Div = styled.div`
    display: flex;
    width: 100%;

    > .columns {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-right: 16px;

        > input {
            marging-left: 10px;
            marging-top: 10px;
            width: 100%;
            border: none;
            outline: 0;
            font-size: 19px;
            line-height: 25px;
            color: #0f1419;
        }
    }

    > input {
        margin-left: 10px;
        width: 100%;
        flex: 1;
        border: none;
        outline: 0;
        font-size: 19px;
        line-height: 24px;
        color: #0f1419;
    }

    > Button {
        background-color: var(--twitterColor) !important;
        border: none !important;
        color: #fff !important;
        font-weight: 900 !important;
        width: 80px !important;
        height: 40px !important;
        margin-top: 20px !important;
        border-radius: 30px !important;
        text-transform: inherit !important;
    }
`

export const DivBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    > .MuiSvgIcon-root {
        fill: var(--twitterColor);
        margin-left: 1rem;
        border: 2px solid var(--twitterColor);
        width: 20px;
        height: 20px;
        border-radius: 5px;
        cursor: pointer;

        &:nth-child(3) {
            border: 1px solid red;
        }
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;
`

/* ------ POST ---------- */
// Post, Avatar, PostBody, PostDescription, Images, PostFooter 

export const Post = styled.div`
    padding: 10px 15px;
    border-top: 1px solid #ddd;
    margin-top: 5px;
    display: flex;
    align-items: flex-start;

    .post_avatar {
        margin-top: 4px;
    }
`
export const PostBody = styled.div`
    padding-left: 10px;
    width: 100%;
    overflow: hidden;

    > div span {
        font-weight: 600;
        font-size: 15px;
        color: #5b7083;
    }

    .post_icon {
        font-size: 14px !important;
        color: var(--twitterColor) !important;
    }
    h3 {
        padding: 0;
        margin: 0;
    }

`
export const PostDescription = styled.div`
    margin-bottom: 10px;
    > p {
        margin: 0;
        padding: 0;
        color: #0f1419;
        font-size: 16px;
        line-height: 16.6875px;
    }
`
export const Images = styled.img`
    border-radius: 20px;
    min-widht: 100%;
    width: 100%;
    min-height: 300px;
`
export const PostFooter = styled.div``