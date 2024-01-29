import { View } from "native-base";
import LayoutGenre from "../../layouts/organisms/LayoutGenre";
import CardGenre from "../../components/global/card/genre";
import appStore from "../../store/app";

const Genre = ({ navigation }) => {

    const { categories } = appStore()


    return (
        <LayoutGenre
            title={"Explorer par genre"}
            navigation={navigation}
            userExist={true}
            progress={100}
            accountScreen={false}>
            <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                {categories.map(({ attributes, id }) => <CardGenre fixSize={true} {...attributes} id={id} key={id} navigation={navigation} />)}
            </View>
        </LayoutGenre>
    );
};

export default Genre;