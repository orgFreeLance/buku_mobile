import { View } from "native-base";
import { ActivityIndicator } from "react-native";
import theme from "../../constants/theme";
import LayoutGenre from "../../layouts/organisms/LayoutGenre";
import CardBook from "../../components/global/card/book";
import appStore from "../../store/app";
import { useState, useEffect } from "react";
import { API_LINK, headers } from "../../constants";
import { bookByGenreURL } from "../../constants/url";
import PageLoading from "../../components/global/loading";

const BookByGenre = ({ navigation }) => {
    const { tomesByGenre, appChange, currentPage } = appStore()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${API_LINK}${bookByGenreURL(currentPage.id)}`, { headers }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })
        }).then(({ data, status }) => {
            if (status == 200) {
                setLoading(false)
                appChange({ tomesByGenre: data.map((item) => ({ ...item, select: false })) })
            }
        }).catch(error => {
            setLoading(false)
        })

    }, [])
    return (
        <LayoutGenre
            title={currentPage.name}
            navigation={navigation}
            userExist={true}
            progress={100}
            accountScreen={false}>
            <PageLoading loading={loading} horizontal={false}>
                <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                    {tomesByGenre.map(({ id, ...attributes }) => <CardBook {...attributes} id={id} key={id} horizontal={false} navigation={navigation} />)}
                </View>
            </PageLoading>
        </LayoutGenre>
    );
};

export default BookByGenre;

