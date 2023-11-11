import { View, Text } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TOUCHABLEOPACITY, headers } from "../../../../constants";
import userStore from "../../../../store/user";
import { buyCoinsURL } from "../../../../constants/url";

export default function CardCoin({ coinsNumber, price, currency, id: coin }) {
    const { id: user, userChange } = userStore()
    const buyCoin = () => {
        fetch(`${buyCoinsURL(coin, user)}`, { headers, method: "POST" }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })

        }).then(({ data: { user, ...rest } }) => {
            const { userCoins } = user
            userChange({ userCoins })
        })
    }
    return <View style={styles.card}>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={buyCoin}>
            <View style={styles.header}>
                <View style={styles.content}>
                    <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={36} color={theme.colors.brand.secondary} />
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}>{coinsNumber}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>{price} {currency?.symbol}</Text>
            </View>
        </TouchableOpacity>

    </View>
}
const styles = StyleSheet.create({
    card: {
        height: 120,
        width: "32%",
        overflow: "hidden",
        borderColor: theme.colors.brand.secondary,
        borderWidth: .2,
        marginBottom: 10,
        borderRadius: 5
    },
    content: {
    },
    header: {
        height: 90,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        height: 30,
        width: "100%",
        justifyContent: "center",
        backgroundColor: theme.colors.brand.secondary
    }
})