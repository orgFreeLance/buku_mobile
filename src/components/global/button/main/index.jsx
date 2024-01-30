import {
  Button, Text
} from "native-base";
import {
  TouchableOpacity,
} from "react-native"
import theme from "../../../../constants/theme";

export default function ButtonMain({ content = "Commencer", borderRadius = 20, width = "95%", onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      _focus={{
        backgroundColor: theme.colors.brand.main,
      }}
      onPress={onPress}
      style={{
        width,
        borderRadius,
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
        backgroundColor: theme.colors.brand.secondary,
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{ color: "white", textAlign: "center", alignItems: "center", justifyContent: "center" }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}
