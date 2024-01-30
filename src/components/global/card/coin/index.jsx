import { View, } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text } from "react-native";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY, headers } from "../../../../constants";
import userStore from "../../../../store/user";
import { buyCoinsURL } from "../../../../constants/url";
import { useState } from "react";
import ModalContainer from "../../modal/notification";
import ImageViewer from "../../imageViewer";
import Loader from "../../Loader";
import ButtonBuy from "../../button/buy";
const shop = require("../../../../../assets/coin/shop.png");
const success = require("../../../../../assets/notifications/signupSuccess.png");

export default function CardCoin({ coinsNumber, price, currency, id: coin }) {
    const { id: user, userChange } = userStore()
    const [modal, setModal] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const openModalSuccess = () => {
        setModalSuccess(true)
    }
    const closeModalSuccess = () => {
        setModalSuccess(false)
    }
    const buyCoin = () => {
        setLoading(true)
        console.log(user)
        fetch(`${buyCoinsURL(coin, user)}`, { headers, method: "POST" }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })

        }).then(({ data, status }) => {
            if (data) {
                const { user } = data
                if (status == 200) {
                    const { userCoins } = user
                    userChange({ userCoins })
                    openModalSuccess()
                }
            }
            console.log(data, status)
            console.log("test")
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            console.log(error)
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
                            <Text style={{ fontWeight: "bold", fontSize: 24, marginHorizontal: 5 }}>
                                <MaterialCommunityIcons name="approximately-equal" size={24} color="black" />
                            </Text>
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
        <ModalContainer closeModal={closeModalSuccess} modal={modalSuccess} >
            <>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%",
                }}>
                    <ImageViewer selectedImage={success} />
                </View>
                <Loader loading={loading}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                        <View style={styles.modal}>
                            <Text style={{ fontWeight: "400", fontSize: 16, textAlign: "center" }}>
                                Félicitation pour votre achat de(s) <Text style={{ fontWeight: "bold" }}>{coinsNumber}</Text> piece(s) !
                            </Text>
                        </View>
                    </View>
                </Loader>
                <View style={{ flexDirection: "row" }} >
                    <ButtonBuy width="100%" name={"Fermer"} color={theme.colors.brand.secondary} onPress={() => {
                        closeModal()
                        closeModalSuccess()
                    }} />
                </View>
            </>
        </ModalContainer>
    </View>
}
const styles = StyleSheet.create({
    card: {
        height: 120,
        width: "49%",
        overflow: "hidden",
        marginBottom: 5,
        borderRadius: 3,
        backgroundColor: theme.colors.brand.gray
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