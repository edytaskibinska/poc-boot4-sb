import React, { FC } from 'react'
import "./descriptionStyle.scss"



interface DescriptionInterface {
    text: string;

}

const Description: FC<DescriptionInterface> = ({ text }) => {
    return (
        <p className="description">{text}</p>
    );
};
export default Description
