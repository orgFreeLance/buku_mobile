import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";
import goTo from "../../../../utils/goTo";
import appStore from "../../../../store/app";

export default function CardBook({ horizontal = true, navigation, picture, name, likes, ...rest }) {
    const { currentBook, appChange } = appStore()
    return <>
        <View style={horizontal ? styles.containerHorizontal : styles.containerVertical}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                    appChange({ currentBook: { picture, name, likes, ...rest } })
                    goTo(navigation, "Book")
                }}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 15,
                }}>
                <View style={styles.avatar} >
                    <ImageBackground source={{ uri: picture }} style={styles.avatar} />
                </View>
                <View style={{
                    paddingHorizontal: 5,
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16, fontVariant: "smallcapse", paddingTop: 3 }}>{name}</Text>
                    <Text style={{ fontWeight: "bold", paddingTop: 3, alignItems: "center" }}>{likes?.data.length}<AntDesign name="staro" size={16} style={{ marginLeft: 5 }} color="black" /></Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    containerHorizontal: {
        height: 320,
        width: 175,
        borderRadius: 15,
        marginRight: 5,
        marginTop: 5, overflow: "hidden"
    },
    avatar: {
        height: 250,
        width: "100%",
        borderRadius: 16,
        overflow: "hidden"
    },
    containerVertical: {
        height: 320,
        width: "48.5%",
        borderRadius: 15,
        marginTop: 5, overflow: "hidden"
    }
})