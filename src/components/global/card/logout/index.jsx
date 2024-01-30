import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../../../constants/theme";
import userStore from "../../../../store/user";
import goTo from "../../../../utils/goTo";

export default function CardLogout({ navigation }) {
    const { userChange } = userStore()
    const logout = () => {
        goTo(navigation, "Welcome")
        userChange({ isAuth: false })
    }
    return <>
        <TouchableOpacity
            onPress={logout} style={{
                height: "auto",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-start",
                alignContent: "center",
                alignItems: "center",
                padding: 20,
                borderBottomColor: theme.colors.brand.grayBold,
                borderBottomWidth: .8
            }}>
            <Text style={{ lineHeight: 30, marginRight: 5, fontWeight: "500", flexDirection: "row", alignItems: "center", }}>
                <AntDesign name="logout" size={24} style={{ paddingRight: 10 }} color="black" />
            </Text>
            <Text style={{ lineHeight: 30, fontWeight: "500", flexDirection: "row", alignItems: "center", }}>
                Logout
            </Text>
        </TouchableOpacity>
    </>
}