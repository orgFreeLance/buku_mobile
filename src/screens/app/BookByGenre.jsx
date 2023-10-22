import { View } from "native-base";
import { ActivityIndicator, StyleSheet } from "react-native";
import theme from "../../constants/theme";
import LayoutGenre from "../../componenents/organisms/LayoutGenre";
import CardBook from "../../components/global/card/book";
import appStore from "../../store/app";
import { useState, useEffect } from "react";
import { API_LINK, headers } from "../../constants";

const BookByGenre = ({ navigation }) => {
    const { tomesByGenre, appChange, currentPage } = appStore()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${API_LINK}/categories/${currentPage.id}?populate[0]=tomes&populate[1][tomes]=likes&fields[0]=name`, { headers }).then(async res => {
            const status = res.status
            const data = await res.json()
            return ({ ...data, status })
        }).then(({ data, status }) => {
            setLoading(false)
            if (status == 200) {
                appChange({ tomesByGenre: data.attributes.tomes.data.map((item) => ({ ...item, select: false })) })
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
            {loading ?
                <ActivityIndicator color={theme.colors.brand.secondary} /> :
                <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                    {tomesByGenre.map(({ attributes, id }) => <CardBook {...attributes} key={id} horizontal={false} navigation={navigation} />)}
                </View>
            }

        </LayoutGenre>
    );
};

export default BookByGenre;

