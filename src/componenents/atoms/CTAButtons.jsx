import { LinearGradient } from "expo-linear-gradient"
import { Text } from "native-base"
import theme from "../../constants/theme";
import { height } from "../../constants/nativeSizes";

const CTAButton = ({ text }) => {
    return (
        <LinearGradient
            start={[0.4, 0]} end={[1, 0]}
            colors={[theme.colors.brand[900], theme.colors.brand[800]]}
            style={{ height: height(6), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9 }}
        >
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20, textAlign: "center", color: "#fff" }}>{text}</Text>
        </LinearGradient>
    )
};

export default CTAButton;