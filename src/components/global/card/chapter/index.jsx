import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import appStore from "../../../../store/app";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY } from "../../../../constants";
import { FontAwesome5 } from '@expo/vector-icons';

export default function CardChapter({ number, name, coinsPrice }) {
    const { currentBook } = appStore()
    return <>
        <View style={{
            overflow: "hidden",
            borderRadius: 5
        }}>
            <TouchableOpacity style={styles.card}
                activeOpacity={TOUCHABLEOPACITY}>
                <View style={{ overflow: "hidden" }}>
                    <ImageBackground source={{ uri: currentBook?.picture }} style={{ width: 100, height: 100 }} />
                </View>
                <View style={{ paddingLeft: 10, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: "bold", fontVariant: "smallcaps", fontSize: 20 }}>{name}</Text>
                    <Text style={{ fontWeight: "400", fontSize: 16, paddingTop: 5 }}>#{number}</Text>
                    <Text style={{ fontWeight: "400", fontSize: 16, paddingTop: 5 }}>
                        <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={16} color={theme.colors.brand.secondary} />
                        {coinsPrice}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 100,
        marginBottom: 2,
        borderRadius: 5,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderColor: "gray",
        borderWidth: .3
    }
});