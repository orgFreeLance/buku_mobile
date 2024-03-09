import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import appStore from "../../../store/app";
import theme from "../../../constants/theme";
import CardRatingProgress from "../card/ratingProgress";
import goTo from "../../../utils/goTo";

export default function BookDetails({ navigation }) {
    const { currentBook, } = appStore()
    return <>
        <Text style={{ color: "black", fontSize: 20, fontWeight: "700", paddingVertical: 5 }}>
            Apropos de ce livre
        </Text>
        <Text style={{ color: "black", fontSize: 16, marginTop: 5 }}>
            {currentBook.resume}
        </Text>
        <View style={{ paddingTop: 15 }}>
            <View style={{ flexDirection: "row", paddingBottom: 5, justifyContent: "space-between" }}>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "700", paddingVertical: 5 }}>
                    Notes et commentaires
                </Text>
                <TouchableOpacity onPress={() => { goTo(navigation, "Ratings") }} style={{ color: "black", fontSize: 20, fontWeight: "700", paddingVertical: 5 }}>
                    <AntDesign name="arrowright" size={24} color={theme.colors.brand.secondary} />
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", height: 150, flexDirection: "row" }}>
                <View style={{
                    width: "42.5%", height: "100%", backgroundColor: "white", justifyContent: "center",
                    alignContent: "center"
                }}>
                    <Text style={{ fontWeight: "900", fontSize: 36, textAlign: "center" }}>4.9</Text>
                    <View style={{ flexDirection: "row", paddingVertical: 5, justifyContent: "center" }}>
                        <AntDesign name="star" style={{ marginLeft: 5 }} size={20} color={theme.colors.brand.secondary} />
                        <AntDesign name="star" style={{ marginLeft: 5 }} size={20} color={theme.colors.brand.secondary} />
                        <AntDesign name="star" style={{ marginLeft: 5 }} size={20} color={theme.colors.brand.secondary} />
                        <AntDesign name="star" style={{ marginLeft: 5 }} size={20} color={theme.colors.brand.secondary} />
                        <AntDesign name="star" style={{ marginLeft: 5 }} size={20} color={theme.colors.brand.grayBold} />
                    </View>
                    <Text style={{ fontWeight: "400", fontSize: 16, textAlign: "center" }}>6000 vote(s)</Text>
                </View>
                <View style={{
                    width: "50%",
                    height: "100%",
                    justifyContent: "center",
                    alignContent: "center",
                    paddingLeft: 5
                }}>
                    <CardRatingProgress pourcentage={40} total={6000} number={5} />
                    <CardRatingProgress pourcentage={10} total={6000} number={4} />
                    <CardRatingProgress pourcentage={20} total={6000} number={3} />
                    <CardRatingProgress pourcentage={25} total={6000} number={2} />
                    <CardRatingProgress pourcentage={5} total={6000} number={1} />
                </View>
            </View>
        </View>
    </>
}