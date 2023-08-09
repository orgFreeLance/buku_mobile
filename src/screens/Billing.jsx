import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import { Box, Center, Flex, Input, ScrollView, Text, useToast } from "native-base";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import StaggerMenu from "../componenents/molecules/StaggerMenu";
import { Formik } from "formik";
import * as yup from "yup";
import CTAContainer from "../componenents/organisms/CTAContainer";
import theme from "../constants/theme";
import CTAButton from "../componenents/atoms/CTAButtons";
import userStore from "../store/user";
import billingStore from "../store/billing";
import { shallow } from "zustand/shallow";

const airtelMoney = require("../../assets/Airtel-money.png");
const orangeMoney = require("../../assets/Orange-money.png");
const mpsa = require("../../assets/Mpsa.png");

const Billing = ({ route, navigation }) => {
  const [isActive, setIsActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { subtitle, billingId } = route.params;
    const id = userStore((state) => state.id);
  const [addPieces, pieces] = billingStore((state) => [state.addPieces, state.pieces], shallow)
  const toast = useToast();

  const mobileMoney = [
    {
      id: 1,
      title: "Airtel Money",
    },
    {
      id: 2,
      title: "MPSA",
    },
    {
      id: 3,
      title: "Orange Money",
    },
  ];

  const signupValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .length(10, "Le téléphone doit contenir 10 caractères")
      .required("Le téléphone est requis"),
  });

  return (
    <ScrollView style={{ flex: 1 }}>
      <Flex>
        <Box
          style={{
            paddingHorizontal: width(5),
          }}>
          <Header1 />
        </Box>
        <Center>
          <Text fontFamily={"Poppins-Bold"} fontSize={20}>
            Moyen de paiement
          </Text>
        </Center>

        {/* 1. Title choisissez votre opérateur : OK
            2. Liste des opératurs qu'on peut sélectionner : OK
            3. Input avec label, entrez votre numéro : OK
            4. Bouton souscrire : OK
            5. Toast, Souscription réussie,
            6. Mise à jour du nombre des pièces
        */}

        <Flex paddingX={width(5)} py={10}>
          <Box my={3}>
            <Text>Choisissez votre opérateur</Text>
          </Box>
          <Flex direction="row" justifyContent={"space-between"}>
            {mobileMoney.map(({ id, title }) => (
              <TouchableHighlight
                onPress={() => setIsActive(id)}
                key={id}
                style={{ borderRadius: 9 }}>
                <Box style={{ borderRadius: 17, position: "relative" }}>
                  <Image
                    source={
                      id === 1 ? airtelMoney : id === 2 ? mpsa : orangeMoney
                    }
                    alt="airtel money"
                    style={{
                      width: width(30),
                      height: height(10),
                      borderRadius: 17,
                    }}
                  />
                  <Box
                    width={5}
                    height={5}
                    borderRadius={100}
                    borderColor={"white"}
                    borderWidth={4}
                    position={"absolute"}
                    right={4}
                    top={2}
                    backgroundColor={
                      isActive === id ? "green.400" : "transparent"
                    }
                  />
                </Box>
              </TouchableHighlight>
            ))}
          </Flex>
        </Flex>

        <Flex py={10} paddingX={width(5)}>
          <Box>
            <Text>Entrez votre numéro</Text>
          </Box>
          <Formik
            initialValues={{
              phoneNumber: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={({ phoneNumber }) => {
              setIsLoading(true)
              addPieces(billingId, id, phoneNumber, pieces)
              toast.show({
                render: () => {
                  return <Box bg="emerald.300"  px="2" py="2" rounded="sm" mb={5}>
                    Achat effectué avec succès
                  </Box>;
                }
              })
              setIsLoading(false)
            }}>
            {({ handleSubmit, errors, handleChange, values, handleBur }) => (
              <>
                <Box py={4}>
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
                </Box>
                <CTAButton
                  isLoading={isLoading}
                  onPress={handleSubmit}
                  text={"Souscrire"}
                />
              </>
            )}
          </Formik>
        </Flex>

        <StaggerMenu billing={true} navigation={navigation} />
      </Flex>
    </ScrollView>
  );
};

export default Billing;

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
