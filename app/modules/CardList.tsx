import React from 'react'

import Title from "../ui-shared/Title/Title"
import Card, { CardInterface } from "../ui-business/Card/Card"
import CardError  from "../ui-business/CardError/CardError"

import data from "../data"

export const CardList = () => {
  const { products } = data
  return (
    <>
      <Title text="Welcome in ts project"></Title>
      <CardError title="Error occured" description="there is an error" date="12/21/21" />

      {products.map((card: CardInterface) => {
        return (
          <Card key={card.id} title={card.title} description={card.description} date={card.date} />
        );
      })}

    </>
  );
};
