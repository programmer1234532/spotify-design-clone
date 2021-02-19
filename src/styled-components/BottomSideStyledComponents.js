import styled from "styled-components";

export const FirstBottomDiv = styled.div`
    display:flex;
    color:white;
    align-items:center;
    flex:1.5;
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
    flex:7 1;
`;

export const MidSecondBottomDiv = styled.div`
    display:flex;
    align-items:center;

    p{
        margin:0 3%;
        font-size:12px;
    }

    progress{
        width:45rem;
        height:10px;
    }
`;

export const Controls = styled.div`
    display:flex;
    align-items:center;
    flex:1;

    i{
        font-size:16px;
        color:#bdbdbd;
        padding:2% 20px;
        
        &:hover{
            color:white;
        }
    }
`;

export const MidRightDiv = styled.div`
    display:flex;
    align-items:center;

    progress{
        width:5rem;
        height:10px;
    }

    i{
        margin:0 15px;
        color:#bdbdbd;

        &:hover{
            color:white;
        }
    }
`;
