import { Text, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons';
import theme from "../../../../constants/theme";

export default function CardDetailsApp() {
    return <>
        <TouchableOpacity style={{
            height: "auto",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            paddingHorizontal: 0,
            borderBottomColor: theme.colors.brand.grayBold,
            borderBottomWidth: .8
        }}>
            <Text style={{ textAlignVertical: "center" }}>
                <Foundation name="info" size={24} style={{ paddingRight: 10 }} color="black" />  À propos de Buku
            </Text>
        </TouchableOpacity>
    </>
}