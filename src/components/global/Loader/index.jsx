import { ActivityIndicator } from "react-native";
import theme from "../../../constants/theme";

export default function Loader({ loading, children }) {
    if (loading) return <>
        <ActivityIndicator
            size="large"
            color={theme.colors.brand.secondary}
        />
    </>
    return <>
        {children}
    </>
}