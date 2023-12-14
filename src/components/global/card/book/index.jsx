import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import theme from "../../../../constants/theme";
import { TOUCHABLEOPACITY } from "../../../../constants";
import goTo from "../../../../utils/goTo";
import appStore from "../../../../store/app";

export default function CardBook({ horizontal = true, navigation, picture, id, name, likesNumber, userViews, coinsPrice }) {
    const { appChange } = appStore()
    return <>
        <View style={horizontal ? styles.containerHorizontal : styles.containerVertical}>
            <TouchableOpacity
                activeOpacity={TOUCHABLEOPACITY}
                onPress={() => {
                    appChange({ currentBook: { picture, name, id, likesNumber, } })
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
                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                        <Text style={{ paddingRight: 5 }}>
                            {likesNumber}
                            <AntDesign name="star" size={16} style={{ paddingRight: 5 }} color={theme.colors.brand.secondary} />
                        </Text>
                        <Text style={{ paddingRight: 5 }}>
                            {userViews}
                            <AntDesign name="eye" size={16} style={{ paddingRight: 5 }} color={theme.colors.brand.secondary} />
                        </Text>
                        <Text style={{ paddingRight: 5 }}>
                            {coinsPrice}
                            <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={16} color={theme.colors.brand.secondary} />
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    containerHorizontal: {
        height: 320,
        width: 175,
        borderRadius: 5,
        marginRight: 5,
        marginTop: 5,
        overflow: "hidden",
        backgroundColor: "gray.100"
    },
    avatar: {
        height: 200,
        width: "100%",
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        overflow: "hidden"
    },
    containerVertical: {
        height: 265,
        width: "49%",
        borderRadius: 5,
        marginTop: 5,
        overflow: "hidden",
        backgroundColor: "gray"
    }
})