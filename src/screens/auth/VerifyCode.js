import { Center, Flex, Input, StatusBar, View, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CTAContainer from "../../componenents/organisms/CTAContainer";
import AuthForm from "../../componenents/organisms/AuthForm";
import theme from "../../constants/theme";
import { submitForm } from "../../utils/sbmitAuth";
import { shallow } from "zustand/shallow";
import userStore from "../../store/user";
import { Formik } from "formik";
import * as yup from "yup";
import goTo from "../../utils/goTo";

const VerifyCode = ({ navigation }) => {
  const toast = useToast();
  const [isLoading, setIsloading] = useState(false);
  //Add Inputs elements here
  const [confirmUser, confirmed, phoneNumber] = userStore(
    (state) => [state.confirmUser, state.confirmed, state.phoneNumber],
    shallow
  );

  const codeValidationSchema = yup.object().shape({
    first: yup
      .string()
      .length(1, "Svp entrez un seul chiffre!")
      .required("Cette case est requise"),
    second: yup
      .string()
      .length(1, "Svp entrez un seul chiffre!")
      .required("Cette case est requise"),
    third: yup
      .string()
      .length(1, "Svp entrez un seul chiffre!")
      .required("Cette case est requise"),
    fourth: yup
      .string()
      .length(1, "Svp entrez un seul chiffre!")
      .required("Cette case est requise"),
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barsTyle={"light-content"}
        backgroundColor={theme.colors.brand.main}
      />
      <Formik
        initialValues={{
          first: "",
          second: "",
          third: "",
          fourth: "",
        }}
        validationSchema={codeValidationSchema}
        onSubmit={({ first, second, third, fourth }) => {
          const code = first + second + third + fourth;
          confirmUser(code, phoneNumber);
        }}>
        {({ handleSubmit, errors, handleChange, values, handleBlur }) => (
          <>
            <AuthForm
              title={"Confirmation numéro"}
              navigation={navigation}
              userExist={false}
              isVerification={true}>
              <Center display={"flex"} style={{ flexDirection: "row" }}>
                <Input
                  onChangeText={handleChange("first")}
                  value={values.first}
                  name={"first"}
                  backgroundColor={theme.colors.brand[500]}
                  type="text"
                  variant="filled"
                  size="md"
                  isRequired
                  w={{
                    base: 50,
                    md: 50,
                  }}
                  maxLength={1}
                  textAlign={"center"}
                />
                <Input
                  onChangeText={handleChange("second")}
                  value={values.second}
                  name={"second"}
                  backgroundColor={theme.colors.brand[500]}
                  type="text"
                  variant="filled"
                  size="md"
                  isRequired
                  w={{
                    base: 50,
                    md: 50,
                  }}
                  maxLength={1}
                  textAlign={"center"}
                />
                <Input
                  onChangeText={handleChange("third")}
                  value={values.third}
                  name={"third"}
                  backgroundColor={theme.colors.brand[500]}
                  type="text"
                  variant="filled"
                  size="md"
                  isRequired
                  w={{
                    base: 50,
                    md: 50,
                  }}
                  maxLength={1}
                  textAlign={"center"}
                />
                <Input
                  onChangeText={handleChange("fourth")}
                  value={values.fourth}
                  name={"fourth"}
                  backgroundColor={theme.colors.brand[500]}
                  type="text"
                  variant="filled"
                  size="md"
                  isRequired
                  w={{
                    base: 50,
                    md: 50,
                  }}
                  maxLength={1}
                  textAlign={"center"}
                />
              </Center>
            </AuthForm>
            <CTAContainer
              onPress={handleSubmit}
              text={"Confirmer"}
              isLoading={isLoading}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputNumber: {
    width: 50,
    height: 50,
  },
});
