import React from "react";
import styled from "styled-components/native";
import { TextInputProps } from "react-native";

const StyledInput = styled.TextInput`
  padding: 0.5em;
  border: 1px solid #ccc;
`;

export default (props: TextInputProps) => <StyledInput {...props} />;
