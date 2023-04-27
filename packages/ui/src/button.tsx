import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  Text,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({text, onClick}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
