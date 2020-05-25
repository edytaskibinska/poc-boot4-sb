import React, {FC} from 'react'
import "./style.scss"

interface TitleInterface {
    text: string;

  }
  
const Title: FC<TitleInterface> = ({text}) => {
  return (
      <h1>
          {text}
      </h1>
  );
};
export default Title
