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