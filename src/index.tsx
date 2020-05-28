import * as React from "react"
import * as ReactDOM from "react-dom"
import { CardList } from './app/CardList'
import '../src/app/_globalStyles'


const ROOT = document.querySelector(".container");

ReactDOM.render(
  <CardList />,
  ROOT
);