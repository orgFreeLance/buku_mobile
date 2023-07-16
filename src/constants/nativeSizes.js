import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
export const width = (percent) => parseInt((percent * screenWidth) / 100, 10);
export const height = (percent) => parseInt((percent * screenHeight) / 100, 10);