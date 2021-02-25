import React from 'react';
import { Icon, IconDiv, Paragraph } from '../styled-components/LeftSideStyledComponents';

const IconAndParagraph = ({icon, words}) => {
    return (
        <IconDiv>
            <div style={{minWidth:"25px",marginRight:"10%"}}>
                <Icon tabIndex={0} className={icon}></Icon>
            </div>
            <div>
                <Paragraph tabIndex={0}>{words}</Paragraph>
            </div>
        </IconDiv>
    )
}

export default IconAndParagraph;
