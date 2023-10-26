import { Radio, View, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import AuthForm from "../../layouts/organisms/AuthForm";
import { useToast } from "native-base";
import ButtonMain from "../../components/global/button/main";
import goTo from "../../utils/goTo";
import appStore from "../../store/app";

const Gender = ({ navigation }) => {
  const { gender, appChange } = appStore()

  return (
    <View style={styles.container}>
      <AuthForm
        title={"Quel est ton genre ?"}
        progress={20}
        navigation={navigation}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "100%", paddingBottom: 10 }}>
            <Text>sélectionner le sexe pour un meilleur contenu</Text>
            <View
              style={{
                paddingVertical: 15,
                width: "100%",
                marginTop: 10,
              }}
            >
              <Radio.Group
                defaultValue={gender}
                name="Gender"
                space={4}
                onChange={(gender) => {
                  appChange({ gender })
                }}
                accessibilityLabel="Choisi ton genre"
              >
                <Radio value="M" my={1}>
                  Homme
                </Radio>
                <Radio value="F" my={1}>
                  Femme
                </Radio>
              </Radio.Group>
            </View>
          </View>
          <ButtonMain
            content="continue"
            onPress={() => {
              goTo(navigation, "Age");
            }}
          />
        </View>
      </AuthForm>
    </View>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
