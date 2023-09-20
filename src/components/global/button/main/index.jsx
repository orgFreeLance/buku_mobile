import { Text } from "native-base";
import theme from "../../../../constants/theme";

export default function ButtonMain({ content = "Commencer", onPress }) {
  return (
    <>
      <Text
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
          marginBottom: 10,
        }}
      >
        {content}
      </Text>
    </>
  );
}
