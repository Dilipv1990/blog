import { createRoot } from "react-dom/client";
import "../public/fonts/fonts.css";
import "./index.css";
import React from "react";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
