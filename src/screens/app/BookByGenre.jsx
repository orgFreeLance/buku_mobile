import { StatusBar, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import LayoutGenre from "../../componenents/organisms/LayoutGenre";
import CardBook from "../../components/global/card/book";

const BookByGenre = ({ navigation }) => {
    return (
        <LayoutGenre
            title={"Genre"}
            navigation={navigation}
            userExist={true}
            progress={100}
            accountScreen={false}>
            <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
                <CardBook horizontal={false} />
            </View>
        </LayoutGenre>
    );
};

export default BookByGenre;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContents: {},
});
