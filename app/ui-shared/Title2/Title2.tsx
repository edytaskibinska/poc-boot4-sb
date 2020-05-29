import React, { FC } from 'react'
import "./title2Style.scss"

interface TitleInterface {
  text: string;

}

const Title2: FC<TitleInterface> = ({ text }) => {
  return (
    <h2>
      {text}
    </h2>
  );
};
export default Title2
