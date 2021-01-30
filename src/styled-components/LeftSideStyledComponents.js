import styled from "styled-components";
import { FaEllipsisH } from 'react-icons/fa';


export const LeftSideDiv = styled.div`
    background-color: purple;
    width:25%;
    height:100%;
    padding-top:15px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    flex-direction:column;
`;

export const FirstDiv = styled.div`
    height:20%;
`; 

export const MoreOptions = styled( FaEllipsisH )`
    color:white;
    font-size:20px;
    cursor:pointer;
`;

export const SecondDiv = styled.div`
    margin-top:10px;
    background-color:black;
    height:50%;
    color:white;
`;