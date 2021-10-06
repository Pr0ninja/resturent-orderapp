import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get('window');

export const dimensionsCheck = () => {
    if (width <= 500) {
        return "mobile"
    } else {
        return "tablet"
    }
}

export const borderradious = width * 0.05
export const elevation = 2
