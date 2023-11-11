import { View, } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text } from "react-native";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { BORDERRADIUS, TOUCHABLEOPACITY, headers } from "../../../../constants";
import userStore from "../../../../store/user";
import { buyCoinsURL } from "../../../../constants/url";
import { useState } from "react";
import ModalContainer from "../../modal/notification";
import ImageViewer from "../../imageViewer";
import Loader from "../../Loader";
import ButtonBuy from "../../button/buy";
const shop = require("../../../../../assets/coin/shop.png");

export default function CardCoin({ coinsNumber, price, currency, id: coin }) {
    const { id: user, userChange } = userStore()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        console.log("click")
        setModal(false)
    }
    const buyCoin = () => {
        console.log("click right")
        setLoading(true)
        fetch(`${buyCoinsURL(coin, user)}`, { headers, method: "POST" }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })

        }).then(({ data: { user, ...rest }, status }) => {
            if (status == 200) {
                const { userCoins } = user
                userChange({ userCoins })
            }
            setLoading(false)
        })
    }
    return <View style={styles.card}>
        <TouchableOpacity activeOpacity={TOUCHABLEOPACITY} onPress={openModal}>
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
        <ModalContainer closeModal={closeModal} modal={modal} >
            <>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}>
                    <ImageViewer selectedImage={shop} />
                </View>
                <Loader loading={loading}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                        <View style={styles.modal}>
                            <View style={styles.content}>
                                <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={36} color={theme.colors.brand.secondary} />
                                <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}>{coinsNumber}</Text>
                            </View>
                            <Text style={{ fontWeight: "bold", fontSize: 24 }}> = </Text>
                            <View style={styles.content}>
                                <Text style={{ textAlign: "center", fontSize: 48, color: theme.colors.brand.secondary, fontWeight: "bold" }}>{price}{currency?.symbol}</Text>
                            </View>
                        </View>
                    </View>
                </Loader>
                <View style={{ flexDirection: "row" }} >
                    <ButtonBuy name={"Annuler"} color="red" onPress={closeModal} />
                    <ButtonBuy name={"Acheter"} color={theme.colors.brand.secondary} onPress={buyCoin} />
                </View>
            </>
        </ModalContainer>
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
    modal: {
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    footer: {
        height: 30,
        width: "100%",
        justifyContent: "center",
        backgroundColor: theme.colors.brand.secondary
    }
})