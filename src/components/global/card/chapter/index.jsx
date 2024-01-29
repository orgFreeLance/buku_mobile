import { View, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import appStore from "../../../../store/app";
import theme from "../../../../constants/theme";
import { TouchableOpacity } from "react-native";
import { TOUCHABLEOPACITY } from "../../../../constants";
import { FontAwesome5 } from '@expo/vector-icons';
import ModalContainer from "../../modal/notification";
import { useState } from "react";
import ImageViewer from "../../imageViewer";
import Loader from "../../Loader";
import ButtonBuy from "../../button/buy";
const shop = require("../../../../../assets/coin/shop.png");

export default function CardChapter({ number, name, coinsPrice }) {
    const { currentBook } = appStore()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const buyCoin = () => { }
    return <>
        <View style={{
            overflow: "hidden",
            borderRadius: 5
        }}>
            <TouchableOpacity style={styles.card}
                onPress={openModal}
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
                            <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}>
                                Vous etes sur de vouloir achetez ?
                            </Text>
                            <View style={styles.content}>
                                <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={36} color={theme.colors.brand.secondary} />
                                <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}>{coinsPrice}</Text>
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
    </>
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 100,
        marginBottom: 5,
        borderRadius: 5,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: theme.colors.brand.gray,
    },
    modal: {
        paddingBottom: 10
    },
    content: {
        justifyContent: "center",
        alignItems: "center"
    }
});