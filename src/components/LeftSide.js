import React from 'react';
import
    {
        LeftSideDiv,
        FirstDiv,
        MoreOptions,
        SecondDiv,
    } from '../styled-components/LeftSideStyledComponents';
import IconAndParagraph from "./IconAndParagraph";

const LeftSide = () => {
    return (
        <LeftSideDiv>
            <FirstDiv>
                <MoreOptions></MoreOptions>
            </FirstDiv>
            <SecondDiv>
                <IconAndParagraph icon="fas fa-home" words="Home"/>
                <IconAndParagraph icon="fas fa-archive" words="Browse"/>
                <IconAndParagraph icon="fas fa-broadcast-tower" words="Radio"/>
            </SecondDiv>
            <div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <h2></h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>
                <IconAndParagraph/>
            </div>
        </LeftSideDiv>
    )
}

export default LeftSide;
