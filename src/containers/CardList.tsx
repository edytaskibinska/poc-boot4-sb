import React from 'react'

import Title from "../app/Title/Title"
import Card, { CardInterface } from "../app/ModuleCard/Card"

import data from "../data"

export const CardList = () => {
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
