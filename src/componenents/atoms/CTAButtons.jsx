import { LinearGradient } from "expo-linear-gradient"
import { Pressable, Spinner, Text } from "native-base"
import theme from "../../constants/theme";
import { height } from "../../constants/nativeSizes";
import goTo from "../../utils/goTo";

const CTAButton = ({ onPress, text, isLoading }) => {

    return (
        <Pressable isDisabled={isLoading} onPress={() => {
            onPress();
        }}>
            <LinearGradient
                start={[0.4, 0]} end={[1, 0]}
                colors={[theme.colors.brand[900], theme.colors.brand[800]]}
                style={{ height: height(6), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 9 }}
            >
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20, textAlign: "center", color: "#fff" }}>{isLoading ? <Spinner color="warning.500" /> : text} </Text>
            </LinearGradient>
        </Pressable>
    )
};

export default CTAButton;