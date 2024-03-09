import { ImageBackground, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
const bg = require("../../../../assets/error/Nodata.png");

export default function NoData({ items, horizontal = false }) {
  if (items?.length === 0)
    return (
      <>
        <View
          style={{
            width: horizontal ? 350 : "100%",
            padding: 10,
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              width: "100%",
              fontSize: 14,
              fontWeight: "700",
            }}
          >
            Aucune donnée trouvé !
          </Text>
          <Text style={{ textAlign: "center" }}>
            <Entypo name="emoji-sad" size={24} color="black" />
          </Text>
          <ImageBackground
            source={bg}
            resizeMode="contain"
            style={{ width: "100%", flex: 1, height: 250, marginTop: 10 }}
          />
        </View>
      </>
    );
}
