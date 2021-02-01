import React from 'react';
import { Icon, IconDiv, Paragraph } from '../styled-components/LeftSideStyledComponents';

const IconAndParagraph = ({icon, words}) => {
    return (
        <IconDiv>
            <Icon className={icon}></Icon>
            <Paragraph>{words}</Paragraph>
        </IconDiv>
    )
}

export default IconAndParagraph;
