import * as React from "react"
import * as ReactDOM from "react-dom"
import { CardList } from './containers/CardList'
import '../src/globalStyles'


const ROOT = document.querySelector(".container");

ReactDOM.render(
  <CardList />,
  ROOT
);