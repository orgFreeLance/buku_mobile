import { Text } from "native-base";
import { Pressable } from "react-native";
import theme from "../../../../constants/theme";

export default function ButtonSecondary({ content = "Commencer", onPress }) {
  return (
    <>
      <Pressable style={{ width: "100%", alignItems: "center" }}>
        <Text
          onPress={onPress}
          style={{
            width: "95%",
            color: theme.colors.brand.secondary,
            textAlign: "center",
            fontWeight: "500",
            fontSize: 18,
            backgroundColor: "white",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 13,
            marginBottom: 10,
            borderColor: theme.colors.brand.secondary,
            borderWidth: 1,
          }}
        >
          {content}
        </Text>
      </Pressable>
    </>
  );
}
