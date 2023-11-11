import { View } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import Layout from "../../layouts/organisms/Layout";
import userStore from "../../store/user";
import CardCoin from "../../components/global/card/coin";

const Coins = ({ navigation }) => {
  const { userCoins } = userStore()
  return (
    <Layout
      title={"Pieces"}
      navigation={navigation}
      userExist={true}
      progress={100}
      coinScreen={false}>
      <View style={{ backgroundColor: theme.colors.brand.secondary, paddingVertical: 15, paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 26, fontWeight: "700", color: "white" }}>
          <FontAwesome5 name="coins" style={{ paddingRight: 5 }} size={24} color={"white"} />
          {` ${userCoins}`}
        </Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingVertical: 5 }}>
        <CardCoin />
        <CardCoin />
        <CardCoin />
        <CardCoin />
        <CardCoin />
        <CardCoin />
      </View>
    </Layout>
  );
};

export default Coins;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
