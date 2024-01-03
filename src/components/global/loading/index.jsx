
import { View } from "native-base";
import CardBook from "../../global/card/book";
export default function PageLoading({ loading, children, horizontal }) {
    if (loading)
        return <>
            <View style={{ width: "100%", flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
                <CardBook horizontal={horizontal} />
            </View>
        </>
    return <>
        {children}
    </>
}