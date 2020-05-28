import React, { FC } from 'react'

import Subtitle from '../shared/Subtitle'
import Description from '../shared/Description'
import Date from '../shared/Date'
import BoxGrey from '../shared/BoxGrey'



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