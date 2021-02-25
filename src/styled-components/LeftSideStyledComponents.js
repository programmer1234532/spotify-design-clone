import styled from "styled-components";
import { FaEllipsisH } from 'react-icons/fa';


export const LeftSideDiv = styled.div`
    background-color: black;
    flex:0 0 200px;
    height:100%;
    overflow:hidden;
    padding-top:1%;
    display:flex;
    flex-direction:column;
    font-family: sans-serif;
    cursor: context-menu;

    @media screen and (max-width:810px){
        display:none;
    }

    @media screen and (min-width:1700px){
       flex:0 0 250px;
    }
`;

export const FirstDiv = styled.div`
    flex:0 0; 
    padding-left:10%;
`; 

export const MoreOptions = styled( FaEllipsisH )`
    color:white;
    font-size:22px;
`;

export const SecondDiv = styled.div`
    margin-top:2%;
    margin-bottom:4%;
    background-color:black;
    color:white;
    display:flex;
    flex:0 0;
    flex-direction:column;
    padding-top:10%;
`;

export const IconDiv = styled.div`
    display:flex;
    align-items:center;
    font-weight:300;
    margin-bottom:8%;
    padding-left:10%;
    color:#bdbdbd;
    border-left:0px solid green;
    transition:border .1s ease-in-out;

    &:hover{
        color:white !important;
    }

    &:active{
        border-left:6px solid green;
    }
`;

export const Icon = styled.i`
    font-size:20px;
`;

export const Paragraph = styled.a`
    font-size:16px;

`;

export const PlaylistsDiv = styled.div`
    background-color:black;
    margin-top:12%;
    overflow-y:auto;
    &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: black;
    }
    &::-webkit-scrollbar-thumb {
        background: #5c5b5b;
        &:hover{
            background:#bdbdbd;
        }
    }
    &::-webkit-scrollbar-button:single-button {
        display: block;
        border-style: solid;
        width: 16px;
        height: 10px;
        background: black;
    }
    
    &::-webkit-scrollbar-button:single-button:vertical:decrement{
        border-width: 0px 8px 8px 8px;
        border-color: transparent transparent #5c5b5b transparent;
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment{
        border-width: 8px 8px 0 8px;
        border-color: #5c5b5b transparent transparent transparent;
    }
`;

export const PlaylistDiv = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:15%;
`;

export const PlaylistHeader = styled.h5`
    font-size:13px;
    font-weight:200;
    color:#a3a3a3;
    padding-bottom:5%;
    padding-left:10%;
`;

export const PlaylistSongs = styled.a`
    font-size:15px;
    padding-left:10%;
    font-weight:300;
    color:#bdbdbd;
    margin-bottom:8%;;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition:font 0.05s ease-in;
    border-left:0px solid green;
    transition:border .1s ease-in-out;
    &:hover{
        font-weight:400;
        color:white;
    }

    &:active{
        border-left:6px solid green;
    }
    
`;

export const NewPlaylistDiv = styled.div`
    height:12%;
    display:flex;
    flex:0 0 50px;
    align-items:center;
    padding:7% 0;
    background-color:black;
    border-top:2px solid rgba(232,230,230,0.25);
`;

export const AddPlaylistDiv = styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;
    font-weight:300;
    color:#bdbdbd;
    height:50%;
    transition:font 0.05s ease-in;
    &:hover{
        font-weight:400;
        color:white;
    }

`;

export const NewPlaylistIcon = styled.i`
    margin-right:16px;
    font-size:26px;
`;

export const NewPlaylistParagraph = styled.a`
    font-size:16px;
    
`;



