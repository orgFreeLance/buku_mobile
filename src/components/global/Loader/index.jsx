import { ActivityIndicator } from "react-native";
import theme from "../../../constants/theme";
import { View } from "native-base";

export default function Loader({ loading, children }) {
  if (loading)
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" color={theme.colors.brand.secondary} />
      </View>
    );
  return <>{children}</>;
}
