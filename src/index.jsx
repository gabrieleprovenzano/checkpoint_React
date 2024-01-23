import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import "./layout.scss"
import { Router } from "./Router";
import ReactDOM  from "react-dom";

const root = document.querySelector("#root")
ReactDOM.render(<Router /> , root)


