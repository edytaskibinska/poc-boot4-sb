import * as React from "react"
import * as ReactDOM from "react-dom"
import { CardList } from './modules/CardList'
import './globalStyles'


const ROOT = document.querySelector(".container");

ReactDOM.render(
  <CardList />,
  ROOT
);