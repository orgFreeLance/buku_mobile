import { View, Text } from "native-base";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";

export default function CardAuthCategory({
  name,
  index,
  onPress,
  select = false,
}) {
  const onClick = () => {
    console.log("card")
    onPress(index);
  };
  if (select)
    return (
      <>
        <TouchableOpacity
          activeOpacity={TOUCHABLEOPACITY}
          onPress={onClick}
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "500",
            fontSize: 18,
            backgroundColor: theme.colors.brand.secondary,
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 13,
          }}
        >
          <Text
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
        onPress={onClick}
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: 18,
          overflow: "hidden",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 13,
          borderColor: theme.colors.brand.secondary,
          borderWidth: 1,
        }}
      >
        <Text
          onPress={onClick}
          style={{
            color: theme.colors.brand.secondary,
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </>
  );
}
