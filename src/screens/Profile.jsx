import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Skeleton, Text } from "native-base";
import Header1 from "../componenents/organisms/Header1";
import { deleteItemAsync, getItemAsync } from "expo-secure-store";
import CTAButton from "../componenents/atoms/CTAButtons";
import { width } from "../constants/nativeSizes";
import userStore from "../store/user";

const Profile = ({ route, navigation }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const logoutUser = userStore((state) => state.logoutUser);

  const getUserData = async () => {
    const firstName = await getItemAsync("firstName");
    const lastName = await getItemAsync("lastName");
    const phoneNumber = await getItemAsync("phoneNumber");
    const email = await getItemAsync("email");
    setFirstName(firstName);
    setLastName(lastName);
    setPhoneNumber(phoneNumber);
    setEmail(email);
  };

  const logout = async () => {
    // logoutUser();
    console.log("déconnexion");
    await deleteItemAsync("token");
    await deleteItemAsync("firstName");
    await deleteItemAsync("phoneNumber");
    await deleteItemAsync("lastName");
    await deleteItemAsync("email");
    await deleteItemAsync("isAuth");
    await deleteItemAsync("confirmed");
    const parent = navigation.getParent().getParent();
    console.log({ navigation });
    console.log({ parent });
    parent.goBack();
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Flex>
        <Box
          style={{
            paddingHorizontal: width(5),
          }}>
          <Header1 />
        </Box>
        <Center>
          {loading ? (
            <Skeleton flex={1} />
          ) : (
            <Text fontFamily={"Poppins-Bold"} fontSize={20}>
              {`${firstName} ${lastName}`}
            </Text>
          )}
        </Center>

        <Flex mt={4} paddingX={width(5)}>
          <Box mb={2}>
            {loading ? (
              <Skeleton flex={1} />
            ) : (
              <Text fontFamily={"Poppins-Medium"} fontSize={12}>
                Prénom : {`${firstName}`}
              </Text>
            )}
          </Box>

          <Box mb={2}>
            {loading ? (
              <Skeleton flex={1} />
            ) : (
              <Text fontFamily={"Poppins-Medium"} fontSize={12}>
                Nom : {`${lastName}`}
              </Text>
            )}
          </Box>

          <Box mb={2}>
            {loading ? (
              <Skeleton flex={1} />
            ) : (
              <Text fontFamily={"Poppins-Medium"} fontSize={12}>
                Téléphone : {`${phoneNumber}`}
              </Text>
            )}
          </Box>

          <Box mb={2}>
            {loading ? (
              <Skeleton flex={1} />
            ) : (
              <Text fontFamily={"Poppins-Medium"} fontSize={12}>
                email : {`${email}`}
              </Text>
            )}
          </Box>
        </Flex>

        <Box paddingX={width(5)} marginTop={width(110)}>
          <CTAButton
            text={"Se déconnecter"}
            isLoading={loading}
            onPress={logout}
          />
        </Box>
      </Flex>
    </View>
  );
};

export default Profile;
