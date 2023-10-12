import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import LayoutGenre from "../../componenents/organisms/LayoutGenre";
import CardGenre from "../../components/global/card/genre";

const Genre = ({ navigation }) => {
    return (
        <LayoutGenre
            title={"Explorer par genre"}
            navigation={navigation}
            userExist={true}
            progress={100}
            accountScreen={false}>
            <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
                <CardGenre fixSize={true} navigation={navigation} />
            </View>
        </LayoutGenre>
    );
};

export default Genre;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContents: {},
});
