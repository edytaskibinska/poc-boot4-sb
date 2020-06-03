import React from 'react'
import Title from "../../ui-shared/Title/Title"
import Card, { CardInterface } from "./Card"
import CardError from "./CardError"
import Charts from '../../ui-shared/Charts/Charts';
import data from "../../data"


const CardList = () => {
  const { products } = data
  return (
    <>
      <Title text="Welcome in ts project"></Title>
      <CardError title="Error occured" description="there is an error" date="12/21/21" />

      <Charts />
      {products.map((card: CardInterface) => {
        return (
          <Card key={card.id} title={card.title} description={card.description} date={card.date} />
        );
      })}

    </>
  );
};
export default CardList




