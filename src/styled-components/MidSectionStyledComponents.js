import styled from "styled-components";

export const MidSectionDiv = styled.div`
    background-color: green;
    width:100%;
    font-family:"Roboto",sans-serif;
    overflow-y:scroll;
    overflow-x:hidden;
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
    height:100%;
`;

export const TopPart = styled.div`
    display:flex;
    height:9%;
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom:1px solid rgba(232,230,230,0.25);
`;

export const BottomPart = styled.div`
    display:flex;
    width:100%;
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
    margin-right:${props => props.lastImage ? "0px" : "10px"};
`;

export const ImageDiv = styled.div`
    margin-bottom:10px;
    position: relative;
`;

export const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:70%;
    color:white;
`;

export const PlaylistName = styled.h2`
    margin-bottom:5px;
    font-size:16px;
`;

export const PlaylistDescription = styled.p`
    margin-bottom:10px;
    font-weight:300;
    font-size:14px;
`;

export const PlaylistFollowers = styled.p`
    margin-bottom:5px;
    font-weight:300;
    font-size:13px;
`;

export const Image = styled.div`
    width:100%;
    height:220px;
    background:${props => props.source && `url("${ props.source }")`};
    background-size: cover;
    background-position: center center;
`;

export const SettingsDiv = styled.div`
    background-color:rgba(0,0,0,0);
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        
        background-color:rgba(0,0,0,0.6);
    }
`;

export const IconsDiv = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    color:#e8e6e6;
    font-size:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        opacity:1;
    }
`;

export const IconDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 0 15px;
`;

export const PlayButton = styled.i`
    font-size:55px;
    &:hover{
        color:white;
        font-size:58px;
    }
`;




