import appStore from "../../../store/app";
import CardChapter from "../card/chapter";

export default function BookChapters() {
    const { chapters } = appStore()
    return <>
        {chapters.map((item, index) => <CardChapter {...item} key={index} />)}
    </>
}