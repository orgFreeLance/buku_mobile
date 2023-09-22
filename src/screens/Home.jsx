import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../constants/theme";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.brand.secondary}
        barsTyle={"light-content"}
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
