import styled from "styled-components";

export const FirstBottomDiv = styled.div`
    display:flex;
    color:white;
    align-items:center;
    flex:1.5 0;
    @media screen and (max-width:1330px){
            flex:2 0;
    }
    @media screen and (max-width:1125px){
            flex:3 0;
    }
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
    justify-content:center;
    flex:7 2;

`;

export const MidSecondBottomDiv = styled.div`
    display:flex;
    align-items:center;

    p{
        margin:0 2%;
        font-size:12px;
    }

    progress{
        width:42rem;
        
        @media screen and (max-width:1400px){
            width:30rem;
        }

        @media screen and (max-width:1330px){
            width:25rem;
        }

        @media screen and (max-width:1125px){
            width:20rem;
        }
        @media screen and (max-width:1024px){
            width:30rem;
        }

        @media screen and (max-width:860px){
            width:22rem;
        }
    }

`;

export const Controls = styled.div`
    display:flex;
    align-items:center;
    flex:0 0;

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
    @media screen and (max-width:1024px){
        display:none;
    }

    progress{
        width:4.5rem;
    }

    

    i{
        margin:0 15px;
        color:#bdbdbd;

        &:hover{
            color:white;
        }
    }

`;
