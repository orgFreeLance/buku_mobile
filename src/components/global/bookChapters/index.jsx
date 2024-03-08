import appStore from "../../../store/app";
import CardChapter from "../card/chapter";
import NoData from "../noData";

export default function BookChapters({ navigation }) {
  const { chapters } = appStore();
  if (chapters.length === 0)
    return (
      <>
        <NoData items={chapters} />
      </>
    );
  return (
    <>
      {chapters?.map((item, index) => (
        <CardChapter {...item} key={`${index + item.id}`} navigation={navigation} />
      ))}
    </>
  );
}
