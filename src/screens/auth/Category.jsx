import { View, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import userStore from "../../store/user";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import CardAuthCategory from "../../components/global/card/category";
import theme from "../../constants/theme";
import appStore from "../../store/app";

const Category = ({ navigation }) => {
  const { categories, appChange } = appStore()

  const onPress = (current) => {
    console.log("click")
    const setCategories = () => {
      return categories.map((item, index) => {
        if (current == index) {
          const select = item.select ? false : true
          return { ...item, select };
        }
        return item
      });
    }
    appChange({ categories: setCategories(categories) });
  };
  return (
    <View style={styles.container}>
      <AuthForm
        title={"Choisissez le genre de livre que vous aimez "}
        navigation={navigation}
        progress={60}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyname: "space-between",
          }}
        >
          <View style={{ width: "100%", flex: 1, paddingBottom: 20 }}>
            <Text>
              sélectionnez votre genre de livre préféré pour de meilleures
              recommandations
            </Text>

            <View
              style={{
                paddingVertical: 15,
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyname: "flex-start",
                marginTop: 10,
              }}
            >
              {categories.map(({ attributes: { name }, id, select }, index) => {
                return (
                  <View style={{ marginTop: 5, marginRight: 5, borderRadius: 20, overflow: "hidden" }}
                    key={index}>
                    <CardAuthCategory
                      name={name}
                      onPress={onPress}
                      select={select}
                      index={index}
                      key={id}
                    />
                  </View>
                )
              })}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyname: "space-between",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <View style={{ width: "100%" }}>
              <ButtonMain
                content="continue"
                onPress={() => {
                  goTo(navigation, "Profile");
                }}
              />
            </View>
          </View>
        </View>
      </AuthForm>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
