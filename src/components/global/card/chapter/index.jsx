import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import appStore from "../../../../store/app";
import theme from "../../../../constants/theme";

export default function CardChapter({ number, name }) {
    const { currentBook } = appStore()
    return <>
        <View style={styles.card}>
            <View style={{ overflow: "hidden" }}>
                <ImageBackground source={{ uri: currentBook?.picture }} style={{ width: 100, height: 100 }} />
            </View>
            <View style={{ paddingLeft: 10, paddingVertical: 10 }}>
                <Text style={{ fontWeight: "bold", fontVariant: "smallcaps", fontSize: 20 }}>{name}</Text>
                <Text style={{ fontWeight: "normal", fontSize: 20, paddingTop: 5 }}>#{number}</Text>
            </View>
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