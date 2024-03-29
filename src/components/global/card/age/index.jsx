import { View, Text } from "native-base";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY } from "../../../../constants";

export default function CardAge({ name, index, onPress, select = false }) {
  const onClick = () => {
    onPress(index);
  };
  if (select)
    return (
      <>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          style={{
            width: "100%",
            color: "#fff",
            textAlign: "center",
            fontWeight: "500",
            fontSize: 18,
            backgroundColor: theme.colors.brand.secondary,
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 13,
          }}
        >
          <Text
            onPress={onClick}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>
      </>
    );
  return (
    <>
      <TouchableOpacity
        activeOpacity={TOUCHABLEOPACITY}
        style={{
          width: "100%",
          textAlign: "center",
          fontWeight: "500",
          fontSize: 18,
          backgroundColor: "white",
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 13,
          borderColor: theme.colors.brand.secondary,
          borderWidth: 1,
        }}
      >
        <Text
          onPress={onClick}
          style={{
            textAlign: "center",
            color: theme.colors.brand.secondary,
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </>
  );
}
