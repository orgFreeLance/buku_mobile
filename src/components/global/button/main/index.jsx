import {
  Button, Text
} from "native-base";
import {
  TouchableOpacity,
} from "react-native"
import theme from "../../../../constants/theme";

export default function ButtonMain({ content = "Commencer", onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      _focus={{
        backgroundColor: theme.colors.brand.main,
      }}
      onPress={onPress}
      style={{
        width: "95%",
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 18,
        backgroundColor: theme.colors.brand.secondary,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginTop: 10,
      }}>
      <Text style={{ color: "white", textAlign: "center" }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}
