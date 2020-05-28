import React, { FC } from 'react'

import Subtitle from '../Subtitle/Subtitle'
import Description from '../Description/Description'
import Date from '../Date/Date'
import BoxGrey from '../BoxGrey/BoxGrey'



export interface CardInterface {
  id?: number;
  key?: number | string;
  title: string;
  description: string;
  date: string;

}

const Card: FC<CardInterface> = ({ title, description, date }) => {
  return (
    <BoxGrey>
      <Subtitle text={title} />
      <Description text={description} />
      <Date date={date} />
    </BoxGrey>
  );
};

export default Card