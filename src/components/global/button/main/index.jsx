import { Button } from "native-base";
import theme from "../../../../constants/theme";

export default function ButtonMain({ content = "Commencer", onPress }) {
  return (
    <>
      <Button
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
        }}
      >
        {content}
      </Button>
    </>
  );
}
