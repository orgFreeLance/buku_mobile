import { ImageBackground } from "react-native";
import appStore from "../../../store/app";
import CardChapter from "../card/chapter";
const bg = require("../../../../assets/error/bg.jpeg");
export default function BookChapters() {
    const { chapters } = appStore()
    if (chapters.length === 0) return <>
        <ImageBackground source={bg} style={{ width: "100%", height: 250 }} />
    </>
    return <>
        {chapters.map((item, index) => <CardChapter {...item} key={index} />)}
    </>
}