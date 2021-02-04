import styled from "styled-components";

export const MidSectionDiv = styled.div`
    background-color: green;
    width:100%;
    font-family:"Roboto",sans-serif;
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

export const MidFirstDiv = styled.div`
    height:10%;
    background-color:black;
    width:100%;
    padding-top:15px;
    display:flex;
`;

export const SearchDiv = styled.div`
    display:flex;
    width:40%;
`;

export const ArrowIcon = styled.i`
    padding:0 17px;
    margin-top:7px;
    color:white;
    font-size:20px;
`;

export const SearchBarICon = styled.i`
    padding-top:5px;
    padding-left:5px;
    padding-right:7px;
    font-size:14px;
    color:#807f7e;
    background:white;
    height:50%;
    border-top-left-radius:50px;
    border-bottom-left-radius:50px;
`;

export const SearchBarDiv = styled.div`
    display:flex;
    width:100%;
    padding-top:5px;
`;

export const SearchBarInput = styled.input`
    width:100%;
    border-top-right-radius:50px;
    border-bottom-right-radius:50px;
    height:50%;
    border:none;
    &:focus {
    outline: none;
    }
`;

export const AccountDiv = styled.div`
    background-color:black;
    display:flex;
    justify-content:flex-end;
    width:100%;
    padding-right:25px;
    padding-top:4px; 
    color:white;
`;

export const AccountImage = styled.img`
    border-radius:50%;
    width:27px;
    height:27px;
    margin-right:10px; 
`;

export const AccountName = styled.p`
    padding-top:4px;
    padding-right:20px;
    font-size:15px;
    cursor:context-menu;
    &:hover{
        text-decoration:underline;
    }
`;

export const DownArrow = styled.i`
    padding-top:4px;
    font-size:20px;
`;

export const MidSecondDiv = styled.div`
    background-color:black;
    height:25%;
    display:flex;
    align-items:flex-end;

`;

export const Title = styled.h1`
    color:white;
    padding-left:25px;
    font-size:48px;
    height:50%;
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:black;
`;

export const Row = styled.div`
    display:flex;
    flex-direction:column;
    margin: 15px 25px;
`;

export const TopPart = styled.div`
    display:flex;
    height:14%;
    margin-bottom:10px;
    border-bottom:0.5px solid rgba(232,230,230,0.25);
`;

export const BottomPart = styled.div`
    background-color:yellow;
    display:flex;
`;

export const PlaylistsTitle = styled.div`
    width:30%;
    padding-top:7px;
    color:white;
    font-size:.7rem;
`;

export const PlaylistsArrows = styled.div`
    display:flex;
    width:70%;
    justify-content:flex-end;
    padding-right:10px;
`;

export const ImageAndTextDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:25%;
    padding-right:15px;
`;

export const ImageDiv = styled.div`
    height:300%;
`;

export const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:70%;
`;

export const PlaylistName = styled.h2`
    margin-bottom:20px;
`;
