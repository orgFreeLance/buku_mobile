import { View, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../componenents/organisms/AuthForm";
import userStore from "../../store/user";
import { shallow } from "zustand/shallow";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import ButtonSecondary from "../../components/global/button/secondary";
import goTo from "../../utils/goTo";
import CardAuthCategory from "../../components/global/card/category";

const Category = ({ navigation }) => {
  const toast = useToast();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [logUser, isAuth] = userStore(
    (state) => [state.logUser, state.isAuth],
    shallow
  );
  const [categories, setCategories] = useState([
    { content: "romance", select: true },
    { content: "fantay", select: false },
    { content: "sci-fi", select: false },
    { content: "horror", select: false },
    { content: "mystery", select: false },
    { content: "thriller", select: false },
    { content: "psychologie", select: false },
    { content: "inspiration", select: false },
    { content: "comedy", select: false },
    { content: "action", select: false },
    { content: "aventure", select: false },
    { content: "comics", select: false },
    { content: "children's", select: false },
    { content: "manga", select: false },
    { content: "art et photographie", select: false },
    { content: "biographie", select: false },
  ]);
  const onPress = (current) => {
    setCategories((state) => {
      return state.map((item, index) => {
        if (current == index) return { ...item, select: !item.select };
        return { ...item };
      });
    });
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
            justifyContent: "space-between",
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
                justifyContent: "flex-start",
                marginTop: 10,
              }}
            >
              {categories.map(({ content, select }, index) => (
                <CardAuthCategory
                  content={content}
                  onPress={onPress}
                  select={select}
                  index={index}
                  key={index}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
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
