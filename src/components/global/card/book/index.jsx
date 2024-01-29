import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
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
                    <Text numberOfLines={1} style={{ fontWeight: "bold", fontSize: 16, fontVariant: "smallcapse", paddingTop: 3 }}>{name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 5 }}>
                        <Text style={{}}>
                            {likesNumber}
                            <AntDesign name="star" size={16} style={{ marginLeft: 5 }} color={theme.colors.brand.secondary} />
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            {userViews}
                            <AntDesign name="eye" size={16} style={{ marginLeft: 5 }} color={theme.colors.brand.secondary} />
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            {coinsPrice}
                            <FontAwesome5 name="coins" style={{ marginLeft: 5 }} size={16} color={theme.colors.brand.secondary} />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    containerHorizontal: {
        height: 250,
        width: 175,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: theme.colors.brand.gray
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
        height: 250,
        width: "49%",
        borderRadius: 10,
        marginTop: 10,
        overflow: "hidden",
        backgroundColor: theme.colors.brand.gray
    }
})