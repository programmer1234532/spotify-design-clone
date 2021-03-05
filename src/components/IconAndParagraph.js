import React from 'react';
import { Icon, IconDiv, Paragraph } from '../styled-components/LeftSideStyledComponents';

const IconAndParagraph = ({icon, words}) => {
    return (
        <IconDiv>
            <div style={{minWidth:"25px",marginRight:"10%"}}>
                <Icon className={icon}></Icon>
            </div>
            <div>
                <Paragraph href="#">{words}</Paragraph>
            </div>
        </IconDiv>
    )
}

export default IconAndParagraph;
