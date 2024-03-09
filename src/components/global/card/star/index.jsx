import { Text, TouchableOpacity, View } from "react-native";
import theme from "../../../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

export default function CardStar({ number = 1, active, selectStar }) {
  if (active)
    return (
      <>
        <TouchableOpacity onPress={() => selectStar(number)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: 35,
              width: 70,
              marginRight: 5,
              backgroundColor: theme.colors.brand.secondary,
              borderRadius: 20,
            }}
          >
            <Text style={{ fontWeight: "800", color: "white" }}>{number}</Text>
            <AntDesign
              name="star"
              style={{ marginLeft: 5 }}
              size={16}
              color={"white"}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  return (
    <>
      <TouchableOpacity onPress={() => selectStar(number)}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 70,
            marginRight: 5,
            borderColor: theme.colors.brand.secondary,
            borderWidth: 2,
            borderRadius: 20,
          }}
        >
          <Text
            style={{ fontWeight: "800", color: theme.colors.brand.secondary }}
          >
            {number}
          </Text>
          <AntDesign
            name="star"
            style={{ marginLeft: 5 }}
            size={16}
            color={theme.colors.brand.secondary}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}
