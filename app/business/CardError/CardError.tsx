import React, { FC } from 'react'

import Subtitle from '../../ui-shared/Subtitle/Subtitle'
import Description from '../../ui-shared/Description/Description'
import Date from '../../ui-shared/Date/Date'
import Box from '../../ui-shared/Box/Box'



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