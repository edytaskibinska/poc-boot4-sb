import React from 'react'

import Title from "./Title"
import Card, { CardInterface } from "./Card"

import data from "../data"

export const App = () => {
  const { products } = data
  return (
    <>
      <Title text="Welcome in ts project"></Title>
      {products.map((card: CardInterface) => {
        return (
          <Card key={card.id} title={card.title} description={card.description} date={card.date} />
        );
      })}

    </>
  );
};
