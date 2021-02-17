import styled from "styled-components";


export const RightSideDiv = styled.div`
    background-color: black;
    width:430px;
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
    overflow-x:hidden;
    padding-left:15px;
    font-family: 'Roboto', sans-serif;

    &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: #171717;
    }
    &::-webkit-scrollbar-thumb {
        background: #5c5b5b;
        &:hover{
            background:#e8e6e6;
        }
    }
    &::-webkit-scrollbar-button:single-button {
        display: block;
        border-style: solid;
        width: 16px;
        background: #171717;
    }
    
    &::-webkit-scrollbar-button:single-button:vertical:decrement{
        border-width: 0px 8px 8px 8px;
        height: 60px;
        border-color: transparent transparent #5c5b5b transparent;
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment{
        border-width: 8px 8px 0 8px;
        height: 20px;
        border-color: #5c5b5b transparent transparent transparent;
    }
`;

export const FriendActivity = styled.div`
    height:15%;
    position:sticky;
    padding-top:60px;
    top:0;
    z-index:999;
    background:black;
    display:flex;
    align-items:flex-end;
    padding-bottom:15px; 
    border-bottom:1px solid rgba(232,230,230,0.25);
    
    h3{
        color:white;
        font-size:17px;
    }
`;

export const FriendsDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding-top:15px;
`;

export const FriendsAccount = styled.div`
    display:flex;
    margin:15px 0;

    i{
        color:white;
    }

`;

export const FriendsImageDiv = styled.div`
    display:flex;
    align-items:center;
    margin:0 10px 0 5px;

    img{
        height:45px;
        width:45px;
        border-radius:50px;
        &:hover{
            opacity:0.8;
        }
    }
`;

export const SongDescription = styled.div`
    padding-right:5px;
    overflow:hidden;
    flex-grow:1;

    p:hover,h4:hover{
        text-decoration:underline;
        cursor:pointer; 
        color:white;  
    }

    h4{
        color:white;
        padding-bottom:5px;
    }

    p{
        color:#e8e6e6;
        font-size:13px; 
        padding-bottom:5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        i{
            font-size:17px;
            padding-right:2px;
        }
    }
`;

export const ButtonDiv = styled.div`

`;



