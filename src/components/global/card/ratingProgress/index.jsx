import { Text, View } from "react-native";
import theme from "../../../../constants/theme";

export default function CardRatingProgress({ pourcentage = 80, number = 5 }) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            textAlignVertical: "center",
            fontWeight: "500",
            marginRight: 3,
          }}
        >
          {number}
        </Text>
        <View
          style={{
            position: "relative",
            borderRadius: 5,
            height: 7,
            width: `${pourcentage * 2}%`,
            backgroundColor: theme.colors.brand.secondary,
          }}
        >
          <View
            style={{
              position: "absolute",
              borderRadius: 10,
              right: 0,
              transform: [{ translateX: 20 }, { translateY: -3 }],
            }}
          >
            <Text style={{ fontSize: 10 }}>{pourcentage}%</Text>
          </View>
        </View>
      </View>
    </>
  );
}
