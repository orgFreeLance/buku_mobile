import { LinearGradient } from "expo-linear-gradient";
import { ArrowForwardIcon, Box, Pressable, Spinner } from "native-base";
import theme from "../../constants/theme";
import { height, width } from "../../constants/nativeSizes";
import { Text, TouchableHighlight } from "react-native";

const CTAButton = ({ onPress, text, isLoading, icon, noTopRadius }) => {
  return (
    <TouchableHighlight
      isDisabled={isLoading}
      style={{ borderRadius: 9 }}
      onPress={() => {
        onPress();
      }}>
      <LinearGradient
        start={[0.4, 0]}
        end={[1, 0]}
        colors={[theme.colors.brand[900], theme.colors.brand[800]]}
        style={{
          height: height(6),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: noTopRadius ? 0 :  9,
          borderTopRightRadius: noTopRadius ? 0 : 9,
          borderBottomLeftRadius: 9,
          borderBottomRightRadius: 9,
          flexDirection: "row",
          
        }}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 20,
            color: "#fff",
          }}>
          {isLoading ? <Spinner color="warning.500" /> : text}{" "}
        </Text>
        {icon && (
          <Box
            marginLeft={width(1)}
            backgroundColor={"white"}
            padding={1}
            borderRadius={100}>
            <ArrowForwardIcon />
          </Box>
        )}
      </LinearGradient>
    </TouchableHighlight>
  );
};

export default CTAButton;
