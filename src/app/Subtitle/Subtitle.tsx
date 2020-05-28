import React, { FC } from 'react'
import "./subtitleStyle.scss"



interface SubTitleInterface {
  text: string;

}

const SubTitle: FC<SubTitleInterface> = ({ text }) => {
  return (
    <h2 className="subtitle">
      {text}
    </h2>
  );
};
export default SubTitle
