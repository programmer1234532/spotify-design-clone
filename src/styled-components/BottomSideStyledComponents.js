import styled from "styled-components";

export const FirstBottomDiv = styled.div`
    display:flex;
    color:white;
    align-items:center;
    flex:1;
`;

export const ImageDiv = styled.div`
    display:flex;

    img{
        max-height:55px;
        max-width:55px;
    }
`;

export const SongInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:0 7%;
    

    p:hover,h4:hover{
        text-decoration:underline;
        color:white;
        cursor:pointer;
    }

    p{
        color:#bdbdbd;
        padding-top:5%;
        font-size:13px;
    }
`;

export const MidBottomDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    flex:6;
`;

export const MidSecondBottomDiv = styled.div`
    display:flex;

    p{
        margin:0 10%;
        font-size:14px;
    }

    progress{

    }
`;

export const Controls = styled.div`
    display:flex;
    align-items:center;

    i{
        font-size:16px;
        color:#bdbdbd;
        padding:2% 20px;
        
        &:hover{
            color:white;
        }
    }
`;

