import { ImageBackground } from "react-native";
const bg = require("../../../../assets/error/bg.jpeg");
export default function NoData({ items }) {
    if (items.length === 0) return <>
        <ImageBackground source={bg} style={{ width: "100%", height: 250 }} />
    </>

}