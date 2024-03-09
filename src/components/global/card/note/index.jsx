import { ImageBackground, Text, View } from "react-native";
import CardStar from "../star";
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../../constants/theme";

export default function CardNote({ createdAt, comment, note, user }) {
  const getDate = () => {
    const date = new Date(createdAt);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };
  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            width: "100%",
            borderRadius: 10,
            marginBottom: 5,
            padding: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: theme.colors.brand.secondary,
                  borderRadius: 50,
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  source={{ uri: user?.picture }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text style={{ fontWeight: "500", marginLeft: 5, fontSize: 18 }}>
                {user?.username}
              </Text>
            </View>
            <CardStar number={note} active={false} />
          </View>
          <Text numberOfLines={3} style={{ paddingTop: 5 }}>
            {comment}
          </Text>
          <Text
            numberOfLines={3}
            style={{ paddingTop: 5, fontWeight: 300, fontSize: 12 }}
          >
            {getDate()}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
