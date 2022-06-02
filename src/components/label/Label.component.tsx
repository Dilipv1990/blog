import { Container } from "./Label.component.styles";
import React from "react";

interface LabelProps {
  children: string;
}
const Label = ({ children }: LabelProps) => <Container>{children}</Container>;

export default Label;
