import { Text, View } from "react-native";
import CardStar from "../star";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardNote({ active }) {
  return (
    <>
      <TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 150,
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
                  backgroundColor: "red",
                  borderRadius: 50,
                }}
              ></View>
              <Text style={{ fontWeight: "500", marginLeft: 5, fontSize: 18 }}>
                Jone Doe
              </Text>
            </View>
            <CardStar number={1} active={false} />
          </View>
          <Text numberOfLines={3} style={{ paddingTop: 5 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ea
            quaerat consectetur? Omnis blanditiis sapiente architecto maiores
            accusamus non quaerat quod ipsum distinctio, nihil deserunt modi
            quasi nam vero esse.
          </Text>
          <Text
            numberOfLines={3}
            style={{ paddingTop: 5, fontWeight: 700, fontSize: 12 }}
          >
            6 moi passé
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
