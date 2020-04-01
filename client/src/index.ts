import { createElement } from "react";
import { render } from "react-dom";
import Modal from "react-modal";
import { Index } from "./App";

const ROOT: HTMLDivElement = document.querySelector("#root");
Modal.setElement(ROOT);
render(createElement(Index), ROOT);
