import styled from "styled-components";

export const AppMainDiv = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100%;
`;

export const TopDiv = styled.div`
    display:flex;
    height:89%;
    
   
`;

export const BottomDiv = styled.div`
    display:flex;
    height:100%;
    background:#2b2b2b;
    padding: 10px 15px;
    font-family:"Roboto", sans-serif;

    progress{
        --webkit-appearance:none;
        height:4px;
        border-radius:20px;
        &::-webkit-progress-bar{
            background:#5c5b5b;
            border-radius:20px;
        }

        &::-webkit-progress-value{
            background:#bdbdbd;
            border-radius:20px;

            &:hover{
                background:#07d900;
            }
        }
    }
`;