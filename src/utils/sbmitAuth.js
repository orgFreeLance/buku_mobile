import { Box } from "native-base";
import goTo from "./goTo";

export const submitForm = (
  isLogin,
  setIsloading,
  logUser,
  isAuth,
  toast,
  phone,
  password,
  firstName,
  lastName,
  email,
  navigation
) => {
  setIsloading(true);
  switch (isLogin) {
    case true:
      logUser(phone, password);
      break;

    case false:
      setIsloading(false);
      goTo(navigation, "VerifyCode");
      logUser(phone, password, firstName, lastName, email);
      break;

    default:
      break;
  }

  if (isAuth) {
    toast.show({
      render: () => {
        return (
          <Box bg="green.500" px="2" py="1" rounded="sm" mb={5} color={"white"}>
            Connexion réussie !
          </Box>
        );
      },
    });
    setIsloading(false);
  } else {
    toast.show({
      render: () => {
        return (
          <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
            Connexion échouée, veuillez réessayer !
          </Box>
        );
      },
    });
    setIsloading(false);
  }
};
