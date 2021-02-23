import styled from "styled-components";

export const MidSectionDiv = styled.div`
    font-family:"Roboto",sans-serif;
    overflow-y:auto;
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
    padding-bottom:2%;
    flex:0 1;

    @media screen and (max-width:810px){
        padding-left:2%;
    }
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

    @media screen and (max-width:810px){
        display:${props => props.hide ? "none" : "block"}
    }

`;

export const SearchBarICon = styled.i`
    
    padding:5px 7px;
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
    padding:5px 3px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;   
    border:none;
    border-top-right-radius:${props => props.bottom && props.bottom};
    border-bottom-right-radius:${props => props.bottom && props.bottom};
    &:focus {
    outline: none;
    }

    @media screen and (max-width:300px){
     width:110px;
    } 
`;

export const AccountDiv = styled.div`
    display:flex;
    justify-content:flex-end;
    padding-right:25px;
    padding-bottom:2%;
    color:white;
    flex:1 0;
    @media screen and (max-width:500px){
        display:none;
    }
`;

export const MobileSettings = styled.div`
    display:none;

    @media screen and (max-width:500px){
        display:flex;
        justify-content:flex-end;
        padding-right:5%;
        align-items:center;
        padding-bottom:2%;
        color:white;
        flex:1 0;

        i{
            font-size:20px;
        }
    }
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

    @media screen and (max-width:375px){
      font-size:1.5em;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background:#171717;
    padding:2% 2.5%;
`;

export const Row = styled.div`
    display:flex;
    flex-direction:column;
    margin: 2% 0;
`;

export const TopPart = styled.div`
    display:flex;
    padding-bottom:1%;
    margin-bottom:2%;
    border-bottom:1px solid rgba(232,230,230,0.25);
`;

export const BottomPart = styled.div`
    display:flex;
    @media screen and (max-width:400px){
        flex-direction:column;
    }
`;

export const PlaylistsTitle = styled.div`
    color:white;
    font-size:13px;
`;

export const PlaylistsArrows = styled.div`
    flex:1 0;
    display:flex;
    justify-content:flex-end;
`;

export const ImageAndTextDiv = styled.div`
    display:flex;
    flex-direction:column;
    flex:1 0;
    margin-right:${props => props.lastImage ? "0%" : "2.5%"};

    @media screen and (max-width:950px){
        display:${props => props.lastImage ? "none" : "flex"};
        margin-right:${props => props.thirdImage ? "0%" : "2.5%"};
    }

    @media screen and (max-width:600px){
        display:${props => props.thirdImage || props.lastImage ? "none" : "flex"};
        margin-right:${props => props.secondImage ? "0%" : "5%"};
    }

    @media screen and (max-width:400px){
        margin-right:0;
        flex-direction:row;
        margin-top:5%;
    }

`;

export const ImageDiv = styled.div`
    margin-bottom:5%;
    display:flex;
    position: relative;
    min-height:175px;
    max-height:280px;
    width:100%;
    flex:1 0 ;

    @media screen and (max-width:370px){
        min-height:150px;
    }

    @media screen and (max-width:500px){
        max-height:200px;
    }

    @media screen and (max-width:420px){
        max-height:180px;
    }

    @media screen and (max-width:768px){
        max-height:240px;
    }

    @media screen and (max-width:310px){
        min-height:130px;
    }
`;

export const TextDiv = styled.div`
    display:flex;
    flex-direction:column;
    color:#bdbdbd;
    flex:0 1;
    min-height:125px;

    @media screen and (max-width:400px){
        flex:1 1;
        padding-left:5%;
        justify-content:center;
        background:#2b2b2b;
        margin-bottom:5%;
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
    }
`;

export const PlaylistName = styled.h2`
    margin-bottom:4%;
    font-size:16px;
    color:white;

    @media screen and (max-width:400px){
        margin-bottom:8%;
        font-size:1.6em;
    }
`;

export const PlaylistDescription = styled.p`
    margin-bottom:4%;
    font-weight:300;
    font-size:14px;
    font-family: sans-serif;
    @media screen and (max-width:400px){
        display:none;
    }
`;

export const PlaylistFollowers = styled.p`
    margin-bottom:4%;
    font-weight:300;
    font-size:13px;
    font-family: sans-serif;
    @media screen and (max-width:400px){
        display:none;
    }
`;

export const Image = styled.img`
    width:100%;
    height:auto;
    flex:1;
    object-fit:cover;

    @media screen and (max-width:400px){
       flex:2 0;
    }
`;

export const SettingsDiv = styled.div`
    background-color:rgba(0,0,0,0);
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
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
    font-size:1.6em;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    &:hover{
        opacity:1;
    }

    @media screen and (max-width:1024px){
        font-size:1.3em;
    }
`;

export const IconDiv = styled.div`
    display:flex;
    margin:0 13%; 
    justify-content:center;
    align-items:center;
    position: ${props => props.relative ? "relative" : ""};
`;

export const PlayButton = styled.i`
    font-size:2.4em;
    transition:icon 1s ease-in;
    position: ${props => props.position ? "static" : "absolute"};
    &:hover{
        color:white;
        font-size:2.5em;
    }

    @media screen and (max-width:1024px){
        font-size:2em;

        &:hover{
            font-size:2.1em;
        }
    }
`;




