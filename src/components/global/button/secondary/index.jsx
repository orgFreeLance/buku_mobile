import { Text, Button } from "native-base";
import {
  TouchableOpacity,
} from "react-native"
import theme from "../../../../constants/theme";

export default function ButtonSecondary({ content = "Commencer", onPress }) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={.7}
        onPress={onPress}
        style={{
          width: "95%",
          textAlign: "center",
          fontWeight: "500",
          fontSize: 18,
          backgroundColor: "white",
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 13,
          marginTop: 10,
          borderColor: theme.colors.brand.secondary,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: theme.colors.brand.secondary,
            textAlign: "center"
          }}
        >
          {content}
        </Text>
      </TouchableOpacity>
    </>
  );
}
