import React, { FC } from 'react'

import Subtitle from '../Subtitle/Subtitle'
import Description from '../Description/Description'
import Date from '../Date/Date'
import Box from '../Box/Box'



export interface CardErrorInterface {
  id?: number;
  key?: number | string;
  title: string;
  description: string;
  date: string;

}

const CardError: FC<CardErrorInterface> = ({ title, description, date }) => {
  return (
    <Box color="red">
      <Subtitle text={title} />
      <Description text={description} />
      <Date date={date} />
    </Box>
  );
};

export default CardError