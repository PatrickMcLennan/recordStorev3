import { createElement } from "react";
import { render } from "react-dom";

import { Index } from "./App";

const ROOT: HTMLDivElement = document.querySelector("#root");

render(createElement(Index), ROOT);
