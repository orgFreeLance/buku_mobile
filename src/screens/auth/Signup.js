import { Input, StatusBar, View, useToast } from "native-base";
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
import { Text } from "react-native";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [isLoading, setIsloading] = useState(false);
  //Add Inputs elements here
  const [signupUser, isAuth] = userStore(
    (state) => [state.signupUser, state.isAuth],
    shallow
  );

  const signupValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Svp entrez un email valide!")
      .required("Email est requis"),
    firstName: yup
      .string()
      .min(2, "Le prénom doit contenir au moins 3 lettres")
      .required("Prénom est requis"),
    lastName: yup
      .string()
      .min(2, "Le prénom doit contenir au moins 3 lettres")
      .required("Nom est requis"),
    phoneNumber: yup
      .string()
      .length(10, "Le téléphone doit contenir 10 caractères")
      .required("Le téléphone est requis"),
    codeExetat: yup
      .string()
      .length(14, "Le code doit contenir 14 caractères")
      .required("Le code est requis"),
    password: yup
      .string()
      .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
      .required("Le password est requis"),
    confirmedPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passes doivent correspondre"
      ),
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barsTyle={"light-content"}
        backgroundColor={theme.colors.brand.main}
      />
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          codeExetat: "",
          password: "",
          confirmedPassword: "",
        }}
        validationSchema={signupValidationSchema}
        onSubmit={({
          phoneNumber,
          password,
          firstName,
          lastName,
          email,
          confirmedPassword,
          codeExetat,
        }) => {
          submitForm(
            false,
            setIsloading,
            signupUser,
            isAuth,
            toast,
            phoneNumber,
            password,
            firstName,
            lastName,
            email,
            confirmedPassword,
            codeExetat,
            navigation
          );
        }}>
        {({ handleSubmit, errors, handleChange, values, handleBlur }) => (
          <>
            <AuthForm
              title={"Informations du candidat"}
              navigation={navigation}
              userExist={true}
              errors={errors}>
              <Input
                onChangeText={handleChange("firstName")}
                value={values.firstName}
                backgroundColor={theme.colors.brand[500]}
                type="text"
                variant="filled"
                size="md"
                placeholder="Prénom*"
                name={"firstName"}
                isRequired
              />
              {errors.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
              )}

              <Input
                onChangeText={handleChange("lastName")}
                value={values.lastName}
                backgroundColor={theme.colors.brand[500]}
                type="text"
                variant="filled"
                size="md"
                placeholder="Nom*"
                name={"lastName"}
                isRequired
              />
              {errors.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}

              <Input
                onChangeText={handleChange("phoneNumber")}
                value={values.phoneNumber}
                backgroundColor={theme.colors.brand[500]}
                type="text"
                variant="filled"
                size="md"
                placeholder="Phone*"
                name={"phoneNumber"}
                isRequired
              />
              {errors.phoneNumber && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              )}

              <Input
                onChangeText={handleChange("codeExetat")}
                value={values.codeExetat}
                backgroundColor={theme.colors.brand[500]}
                type="text"
                variant="filled"
                size="md"
                placeholder="Code 14 chiffres*"
                name={"codeExetat"}
                isRequired
              />
              {errors.codeExetat && (
                <Text style={styles.error}>{errors.codeExetat}</Text>
              )}

              <Input
                onChangeText={handleChange("email")}
                value={values.email}
                backgroundColor={theme.colors.brand[500]}
                type="text"
                variant="filled"
                size="md"
                placeholder="E-mail*"
                name={"email"}
                isRequired
              />
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}

              <Input
                onChangeText={handleChange("password")}
                value={values.password}
                backgroundColor={theme.colors.brand[500]}
                type="password"
                variant="filled"
                size="md"
                placeholder="Mot de passe*"
                name={"password"}
                isRequired
              />
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}

              <Input
                onChangeText={handleChange("confirmedPassword")}
                value={values.confirmedPassword}
                backgroundColor={theme.colors.brand[500]}
                type="password"
                variant="filled"
                size="md"
                placeholder="Confirmer Mot de passe*"
                name={"confirmedPassword"}
                isRequired
              />
              {errors.confirmedPassword && (
                <Text style={styles.error}>{errors.confirmedPassword}</Text>
              )}
            </AuthForm>
            <CTAContainer
              onPress={handleSubmit}
              text={"S'inscrire"}
              isLoading={isLoading}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
  error: {
    color: "red",
    alignSelf: "flex-start",
  },
});
