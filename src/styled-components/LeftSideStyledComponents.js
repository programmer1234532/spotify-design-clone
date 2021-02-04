import styled from "styled-components";
import { FaEllipsisH } from 'react-icons/fa';


export const LeftSideDiv = styled.div`
    background-color: black;
    width:300px;
    height:100%;
    padding-top:20px;
    display:flex;
    flex-direction:column;
    font-family: 'Roboto', sans-serif;
    cursor: context-menu;
`;

export const FirstDiv = styled.div`
    height:9%;
    padding-left:20px;
`; 

export const MoreOptions = styled( FaEllipsisH )`
    color:white;
    font-size:22px;
`;

export const SecondDiv = styled.div`
    margin-top:10px;
    background-color:black;
    height:32%;
    color:white;
    display:flex;
    flex-direction:column;
    padding-left:20px;
`;

export const IconDiv = styled.div`
    display:flex;
    font-weight:300;
    color:#e8e6e6;
    -webkit-text-stroke: 0px #e8e6e6;
    transition:font 0.05s ease-in;
    
    &:hover{
        -webkit-text-stroke: 0.7px white;
    }
`;

export const Icon = styled.i`
    margin-right:22px;
    font-size:20px;
`;

export const Paragraph = styled.p`
    font-size:16px;
    color:#e8e6e6;

`;

export const PlaylistsDiv = styled.div`
    background-color:black;
    padding-left:20px;
    margin-top:20px;
    overflow-y:scroll;
    &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: black;
    }
    &::-webkit-scrollbar-thumb {
        background: #5c5b5b;
        &:hover{
            background:#e8e6e6;
        }
    }
`;

export const PlaylistDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:50%;
`;

export const PlaylistHeader = styled.p`
    font-size:13px;
    font-weight:200;
    height:11%;
    color:#e8e6e6;
`;

export const PlaylistSongs = styled.p`
    font-size:15px;
    font-weight:300;
    color:#e8e6e6;
    height:13.5%;
    transition:font 0.05s ease-in;
    &:hover{
        font-weight:400;
        color:white;
    }
`;

export const NewPlaylistDiv = styled.div`
    height:16%;
    display:flex;
    align-items:center;
    margin-top:4px;
    background-color:black;
    border-top:0.5px solid rgba(232,230,230,0.25);
`;

export const AddPlaylistDiv = styled.div`
    display:flex;
    align-items:center;
    padding-left:20px;
    font-weight:300;
    color:#e8e6e6;
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

export const NewPlaylistParagraph = styled.p`
    font-size:16px;
    padding-top:3px;
`;



