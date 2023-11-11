import { Text } from "react-native";
import appStore from "../../../store/app";

export default function BookDetails() {
    const { currentBook, } = appStore()
    return <>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "700", paddingVertical: 5 }}>
            Apropos de ce livre
        </Text>
        <Text style={{ color: "black", fontSize: 16 }}>
            {currentBook.resume}
        </Text>
    </>
}