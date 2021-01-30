import React from 'react';

const IconAndParagraph = ({icon, words}) => {
    return (
        <div>
            <i className={icon}></i>
            <p>{words}</p>
        </div>
    )
}

export default IconAndParagraph;
