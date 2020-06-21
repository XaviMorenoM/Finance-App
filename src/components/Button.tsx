import React from "react";
import styled from "styled-components/native";
import { ButtonProps } from "react-native";
import colors, { Color } from "../styles/colors";

const StyledButton = styled.Button`
  padding: 0.5em;
`;

interface Props extends ButtonProps {
  color: Color;
}

export default ({ color, ...rest }: Props) => (
  <StyledButton color={colors[color]} {...rest} />
);
