import { StyleSheet, View } from "react-native";
import Layout from "../../layouts/Layout";
import CardBook from "../../components/global/card/book";
import { useState, useEffect } from "react";
import appStore from "../../store/app";
import { API_LINK, headers } from "../../constants";
import { tomesURl } from "../../constants/url";
import PageLoading from "../../components/global/loading";
import NoData from "../../components/global/noData";

const Discover = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { tomes, appChange } = appStore();
  useEffect(() => {
    fetch(`${API_LINK}${tomesURl}`, { headers })
      .then(async (res) => {
        const status = res.status;
        const data = await res.json();
        return { ...data, status };
      })
      .then(({ data, status }) => {
        setLoading(false);
        if (status == 200) {
          appChange({
            tomes: data.map((item) => ({ ...item, select: false })),
          });
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <Layout
      title={"Découvertes"}
      navigation={navigation}
      userExist={true}
      progress={100}
      discoverScreen={false}
    >
      <PageLoading loading={loading} horizontal={false}>
        <NoData items={tomes} />
        <View
          style={{
            width: "100%",
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {tomes.map(({ attributes, id }) => (
            <CardBook
              {...attributes}
              id={id}
              key={id}
              horizontal={false}
              navigation={navigation}
            />
          ))}
        </View>
      </PageLoading>
    </Layout>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
