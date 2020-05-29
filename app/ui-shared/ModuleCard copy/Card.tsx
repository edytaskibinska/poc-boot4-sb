import React, { FC } from 'react'

import Subtitle from '../Subtitle/Subtitle'
import Description from '../Description/Description'
import Date from '../Date/Date'
import Box  from '../Box/Box'



export interface CardInterface {
  id?: number;
  key?: number | string;
  title: string;
  description: string;
  date: string;

}

const Card: FC<CardInterface> = ({ title, description, date }) => {
  return (
    <Box color="grey">
      <Subtitle text={title} />
      <Description text={description} />
      <Date date={date} />
    </Box >
  );
};

export default Card