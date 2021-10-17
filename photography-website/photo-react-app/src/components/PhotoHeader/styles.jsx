import styled from "@emotion/styled";

const PhotoHeaderStyles = styled('header')`
    align-items: flex-end;
    background-color: #53C7E6;
    box-sizing: border-box;
    color: black;
    display: flex;
    height: 88px;
    justify-content: right;
    margin-left: auto;
    margin-right: auto;
    padding-right: 16px;
    position: relative;
    `

const PhotoTitleStyles = styled('h1')`
    justify-content: right;
    align-content: flex-end;
    font-family: Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif;
    font-size: 24px;
    font-weight: bold;

`
const PhotoSubtitleStyles= styled('p')`
font-size: 10px;
`

export { PhotoHeaderStyles, PhotoTitleStyles, PhotoSubtitleStyles }