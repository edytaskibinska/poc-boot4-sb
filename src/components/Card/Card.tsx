import React, { FC } from 'react'
import "./CardStyle.scss"



export interface CardInterface {
  id?: number;
  key?: number | string;
  title: string;
  description: string;
  date: string;

}

const Card: FC<CardInterface> = ({ title, description, date }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{description}</p>
      <sub>{date}</sub>
    </div>
  );
};

export default Card