import React, {FC} from 'react'

interface TitleInterface {
    text: string;

  }
  
  export const Title: FC<TitleInterface> = ({text}) => {
    return (
        <h1>
            {text}
        </h1>
    );
  };
  
