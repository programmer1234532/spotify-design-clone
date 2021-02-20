import styled from "styled-components";

export const MidSectionDiv = styled.div`
    font-family:"Roboto",sans-serif;
    overflow-y:scroll;
    overflow-x:hidden;
    flex:2;
    &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: #171717;
    }
    &::-webkit-scrollbar-thumb {
        background: #5c5b5b;
        &:hover{
            background:#999999;
        }
    }
    &::-webkit-scrollbar-button:single-button {
        display: block;
        border-style: solid;
        width: 16px;
        background: #171717;
    }
    
    &::-webkit-scrollbar-button:single-button:vertical:decrement{
        border-width: 0 8px 8px 8px;
        height: 50px;
        border-color: transparent transparent #5c5b5b transparent;
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment{
        border-width: 8px 8px 0 8px;
        height: 20px;
        border-color: #5c5b5b transparent transparent transparent;
    }
`;

export const MidFirstDiv = styled.div`
`;

export const SearchDiv = styled.div`
    display:flex;
    flex:1 1;
`;

export const ArrowIcon = styled.i`
    padding:0 17px;
    opacity:0.8;
    color:${props => props.color ? props.color : "#999999"};
    font-size:20px;
    &:hover{
        color:${props => props.hover ? "white" : "#5c5b5b" };
        opacity:${props => props.hover ? "1" : "0.8" };
    }

`;

export const SearchBarICon = styled.i`
    
    padding:5px 0;
    color:#807f7e;
    background:white;
    border-top-left-radius:${props => props.delete ? "0" : "50px"};
    border-bottom-left-radius:${props => props.delete ? "0" : "50px"};
    border-top-right-radius:${props => props.delete ? "50px" : "0"};
    border-bottom-right-radius:${props => props.delete ? "50px" : "0"};
`;

export const SearchBarDiv = styled.div`
    display:flex;   
`;

export const SearchBarInput = styled.input`
    padding:5px 0;
    border:none;
    border-top-right-radius:${props => props.bottom && props.bottom};
    border-bottom-right-radius:${props => props.bottom && props.bottom};
    &:focus {
    outline: none;
    }
`;

export const AccountDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    padding-right:25px;
    color:white;
    flex:1 0;
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
    color:white;
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
`;

export const Title = styled.h1`
    color:white;
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:#171717;
    padding-top:15px;
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
    margin-right:${props => props.lastImage ? "0px" : "25px"};
`;

export const ImageDiv = styled.div`
    margin-bottom:10px;
    position: relative;
`;

export const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:70%;
    color:#bdbdbd;
`;

export const PlaylistName = styled.h2`
    margin-bottom:5px;
    font-size:16px;
    color:white;
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
        
        background-color:rgba(0,0,0,0.5);
    }
`;

export const IconsDiv = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    color:white;
    font-size:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    &:hover{
        opacity:1;
    }
`;

export const IconDiv = styled.div`
    display:flex;
    margin:0 30px; 
    justify-content:center;
    align-items:center;
    position: ${props => props.relative ? "relative" : ""};
`;

export const PlayButton = styled.i`
    font-size:55px;
    transition:icon 1s ease-in;
    position: ${props => props.position ? "static" : "absolute"};
    &:hover{
        color:white;
        font-size:58px;
    }
`;




