import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../../../constants/theme";

export default function CardLogout() {
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
            <Text style={{ lineHeight: 30, flexDirection: "row", alignItems: "center", }}>
                <AntDesign name="logout" size={24} style={{ paddingRight: 10 }} color="black" />  Logout
            </Text>
        </TouchableOpacity>
    </>
}